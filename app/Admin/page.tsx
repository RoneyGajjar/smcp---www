"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard, Wallet, FileText, Building2, BarChart3, Settings,
  Search, Calendar, Users, ChevronLeft, ChevronRight, Trash2
} from 'lucide-react';
import { createClient } from "@/lib/supabase"
import { Parser } from 'json2csv';

export default function AdminDashboard() {
  const supabase = createClient();

  const [borrowers, setBorrowers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCH BORROWERS
  useEffect(() => {
    async function fetchBorrowers() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('borrowers') // Pointing to your residential table
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setBorrowers(data);
      }
      setIsLoading(false);
    }
    fetchBorrowers();
  }, [supabase]);

  // DELETE BORROWER
  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to permanently delete this residential application? This action cannot be undone.");
    if (!isConfirmed) return;

    const { error } = await supabase
      .from('borrowers')
      .delete()
      .eq('id', id);

    if (error) {
      alert("Failed to delete record: " + error.message);
    } else {
      setBorrowers(borrowers.filter((user) => user.id !== id));
    }
  };

  // EXPORT CSV FUNCTION
  const handleExport = () => {
    if (borrowers.length === 0) {
      alert("No data available to export.");
      return;
    }

    try {
      // Flatten the data to ensure complex arrays don't break the CSV format
      const flattenedData = borrowers.map(b => ({
        ...b,
        address_history: JSON.stringify(b.address_history || []),
        employment_history: JSON.stringify(b.employment_history || []),
        additional_income_sources: JSON.stringify(b.additional_income_sources || []),
        dependents_ages: JSON.stringify(b.dependents_ages || [])
      }));

      const parser = new Parser();
      const csv = parser.parse(flattenedData);

      // Create a blob and trigger browser download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Vault_Export_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error(err);
      alert("Export failed. Please check the console for details.");
    }
  };

  const getInitials = (first: string, last: string) => {
    if (!first && !last) return "??";
    return `${(first || "").charAt(0)}${(last || "").charAt(0)}`.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased">

      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-[260px] bg-[#042f24] text-slate-300 flex flex-col hidden lg:flex shrink-0">
          <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
            <a href="#" className="flex items-center gap-4 px-4 py-3 bg-[#0a4233] text-white rounded-lg font-medium shadow-sm">
              <LayoutDashboard size={20} className="text-emerald-400" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg font-medium transition-colors">
              <Wallet size={20} /> Loans
            </a>
            <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg font-medium transition-colors">
              <FileText size={20} /> Applications
            </a>
            <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg font-medium transition-colors">
              <Building2 size={20} /> Lenders
            </a>
            <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg font-medium transition-colors">
              <BarChart3 size={20} /> Analytics
            </a>
            <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-lg font-medium transition-colors">
              <Settings size={20} /> Settings
            </a>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-10">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Vault Analytics</h1>
              <p className="text-slate-500 mt-1 font-medium">Overview of institutional activity and lender performance.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg shadow-sm font-medium hover:bg-slate-50 transition-colors">
                <Calendar size={18} /> Oct 24 - Oct 31, 2024
              </button>

              {/* <-- EXPORT BUTTON WIRED UP HERE --> */}
              <button
                onClick={handleExport}
                className="bg-[#0a6c50] text-white px-5 py-2.5 rounded-lg shadow-sm font-bold hover:bg-[#085a42] transition-colors"
              >
                Export Report
              </button>

            </div>
          </div>

          {/* KPI CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {/* Card 1 - Dynamically connected to borrowers length */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Users size={24} />
                </div>
                <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2.5 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Users</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                {isLoading ? "..." : borrowers.length}
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Building2 size={24} />
                </div>
                <span className="text-slate-400 text-xs font-bold px-2.5 py-1">Stable</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Lenders</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">456</h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                  <FileText size={24} />
                </div>
                <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">Urgent</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Pending Applications</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">84</h3>
            </div>

            {/* Card 4 - Dark Theme */}
            <div className="bg-[#0a3d2e] p-6 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none translate-x-4 translate-y-4">
                <BarChart3 size={120} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-emerald-100/70 text-sm font-bold uppercase tracking-wider mb-1">Total Value Locked</p>
                <h3 className="text-4xl font-black text-white tracking-tight">$4.2B</h3>
              </div>
              <div className="flex items-end gap-1 mt-6 h-10">
                <div className="w-3 bg-emerald-400 rounded-t-sm h-[40%]"></div>
                <div className="w-3 bg-emerald-400 rounded-t-sm h-[60%]"></div>
                <div className="w-3 bg-emerald-400 rounded-t-sm h-[80%]"></div>
                <div className="w-3 bg-emerald-400 rounded-t-sm h-[100%]"></div>
                <div className="w-3 bg-white rounded-t-sm h-[70%]"></div>
              </div>
            </div>
          </div>

          {/* TABLE SECTION */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-8">
                <button className="font-bold pb-2 border-b-2 border-[#0a4233] text-slate-900">Active Borrowers</button>
              </div>
              <div className="relative hidden sm:block">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search entries..."
                  className="w-full sm:w-64 bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a4233]/20"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-[30%]">Borrower</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-[20%]">Contact</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-[15%]">Status</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-[15%]">Date Applied</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right w-[20%]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {isLoading ? (
                    <tr><td colSpan={5} className="px-8 py-10 text-center text-slate-400 font-medium">Loading secure vault data...</td></tr>
                  ) : borrowers.length === 0 ? (
                    <tr><td colSpan={5} className="px-8 py-10 text-center text-slate-400 font-medium">No active borrowers found.</td></tr>
                  ) : (
                    borrowers.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-slate-100 text-slate-600">
                              {getInitials(user.first_name, user.last_name)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{user.first_name} {user.last_name}</p>
                              <p className="text-xs text-slate-500 font-mono">ID: {user.id.slice(0, 8)}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <p className="text-sm font-medium text-slate-900">{user.email}</p>
                          <p className="text-xs text-slate-500">{user.phone}</p>
                        </td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-emerald-50 text-emerald-600">RECEIVED</span>
                        </td>
                        <td className="px-8 py-5">
                          <p className="text-sm font-bold text-slate-900">{new Date(user.created_at).toLocaleDateString()}</p>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="p-2 text-red-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                              title="Delete Application"
                            >
                              <Trash2 size={18} />
                            </button>
                            <Link
                              href={`/Admin/application/${user.id}`}
                              className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors inline-block"
                            >
                              Manage
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-8 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <span className="text-xs font-medium text-slate-500">Showing {borrowers.length} entities</span>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-slate-400 hover:bg-white hover:text-slate-900 transition-colors"><ChevronLeft size={16} /></button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#042f24] text-white font-bold text-sm shadow-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-slate-400 hover:bg-white hover:text-slate-900 transition-colors"><ChevronRight size={16} /></button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}