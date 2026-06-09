"use client"
import React, { useState } from 'react';
import {
    LayoutGrid, Users, DollarSign, FolderOpen, Settings,
    Bell, Copy, CheckCircle2, TrendingUp, ArrowRight,
    Briefcase, Activity, Target
} from 'lucide-react';
import { generateReferralCode } from '@/lib/utils';

export default function PartnerDashboard() {
    const [copied, setCopied] = useState(false);
    const referralLink = generateReferralCode('roneyg@stratmire.com');


    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const recentReferrals = [
        { initials: 'MA', name: 'Marcus Aurelius Dev Group', type: 'Commercial Real Estate', date: 'Oct 24, 2026', amount: '$2,450,000', status: 'UNDERWRITING', statusColor: 'bg-emerald-100 text-emerald-700' },
        { initials: 'SL', name: 'Skyline Logistics LLC', type: 'Equipment Financing', date: 'Oct 21, 2026', amount: '$840,000', status: 'IN PROGRESS', statusColor: 'bg-slate-200 text-slate-700' },
        { initials: 'VH', name: 'Vanguard Hospitality', type: 'Bridge Loan', date: 'Oct 18, 2026', amount: '$5,200,000', status: 'APPROVED', statusColor: 'bg-emerald-100 text-emerald-700' },
        { initials: 'BT', name: 'Blue Tower Ventures', type: 'SBA 7(a)', date: 'Oct 12, 2026', amount: '$350,000', status: 'CLOSED', statusColor: 'bg-slate-900 text-white' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans">

            {/* SIDEBAR */}
            <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col hidden lg:flex">
                <div className="p-6">
                    <h1 className="text-xl font-black text-slate-900">Stratmire Capital</h1>
                    <p className="text-sm text-slate-500 font-medium mt-1">Partner Dashboard</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <a href="#" className="flex items-center gap-3 bg-slate-200 text-slate-900 px-4 py-3 rounded-xl font-bold transition-colors">
                        <LayoutGrid size={20} /> Overview
                    </a>
                    <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-xl font-medium transition-colors">
                        <Users size={20} /> Referrals
                    </a>
                    <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-xl font-medium transition-colors">
                        <DollarSign size={20} /> Earnings
                    </a>
                    <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-xl font-medium transition-colors">
                        <FolderOpen size={20} /> Resources
                    </a>
                    <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-xl font-medium transition-colors">
                        <Settings size={20} /> Settings
                    </a>
                </nav>

                <div className="p-6">
                    <button className="w-full bg-[#0a6c50] text-white font-bold py-3 rounded-xl hover:bg-[#085a42] transition-colors shadow-lg shadow-[#0a6c50]/20">
                        New Referral
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto">

                {/* HEADER */}
                <header className="bg-slate-50 px-8 py-6 flex items-center justify-between sticky top-0 z-10 border-b border-slate-200/50 backdrop-blur-md">
                    <div className="flex items-center gap-8">
                        <h2 className="text-2xl font-bold text-slate-900">Partner Portal</h2>
                        <div className="hidden md:flex gap-6 text-sm font-medium">
                            <a href="#" className="text-slate-900 border-b-2 border-slate-900 pb-1">Overview</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 pb-1 transition-colors">Reports</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 pb-1 transition-colors">Marketing</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-slate-400 hover:text-slate-800 transition-colors">
                            <Bell size={24} />
                        </button>
                        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900">Roney Gajjar</p>
                                <p className="text-xs font-medium text-slate-500">Level 1 Starter</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden border-2 border-white shadow-sm">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* DASHBOARD BODY */}
                <div className="p-8 max-w-7xl mx-auto w-full space-y-6">

                    {/* TOP METRICS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* EARNINGS - DARK CARD */}
                        <div className="md:col-span-6 lg:col-span-6 bg-[#042f24] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                            <p className="text-sm font-bold text-emerald-400/80 tracking-wider uppercase mb-2">Total Earnings</p>
                            <h3 className="text-5xl font-black mb-4">$142,850.00</h3>
                            <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                                <TrendingUp size={16} /> +12.5% from last month
                            </p>
                        </div>

                        {/* TOTAL REFERRALS */}
                        <div className="md:col-span-3 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                                <Users size={20} className="text-slate-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Referrals</p>
                                <h3 className="text-3xl font-black text-slate-900">124</h3>
                            </div>
                            <p className="text-xs font-bold text-[#0a6c50] mt-4">8 New this week</p>
                        </div>

                        {/* ACTIVE APPS */}
                        <div className="md:col-span-3 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                                <Activity size={20} className="text-slate-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Active Apps</p>
                                <h3 className="text-3xl font-black text-slate-900">18</h3>
                            </div>
                            <p className="text-xs font-medium text-slate-400 mt-4">Avg. 14 days processing</p>
                        </div>
                    </div>

                    {/* SECONDARY METRICS */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* CLOSED LOANS */}
                        <div className="md:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle2 size={20} className="text-slate-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Closed Loans</p>
                                <h3 className="text-3xl font-black text-slate-900">42</h3>
                            </div>
                        </div>

                        {/* PARTNER REFERRAL LINK */}
                        <div className="md:col-span-9 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Partner Referral Link</h3>
                                <p className="text-sm text-slate-500 mt-1">Share this unique URL with your network to track tier commissions automatically.</p>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200 max-w-md w-full sm:w-auto">
                                <code className="text-sm text-slate-700 px-3 truncate font-mono">{referralLink}</code>
                                <button
                                    onClick={handleCopy}
                                    className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 rounded-lg transition-colors shrink-0 flex items-center justify-center"
                                    title="Copy link"
                                >
                                    {copied ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Copy size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* TABLE SECTION */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">Recent Referrals</h3>
                            <a href="#" className="text-sm font-bold text-[#0a6c50] hover:underline flex items-center gap-1">
                                View Full History <ArrowRight size={16} />
                            </a>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                                    <tr>
                                        <th className="px-6 py-4">Borrower Name</th>
                                        <th className="px-6 py-4">Referral Date</th>
                                        <th className="px-6 py-4">Loan Amount</th>
                                        <th className="px-6 py-4">Current Status</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {recentReferrals.map((ref, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs shrink-0">
                                                    {ref.initials}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{ref.name}</p>
                                                    <p className="text-xs text-slate-500 font-medium">{ref.type}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{ref.date}</td>
                                            <td className="px-6 py-4 font-bold text-slate-900">{ref.amount}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${ref.statusColor}`}>
                                                    {ref.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                                                    <LayoutGrid size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">

                        {/* MARKETING ASSETS */}
                        <div
                            className="rounded-2xl p-8 text-white shadow-lg relative overflow-hidden flex flex-col justify-end min-h-[240px] bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop")' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#042f24]/90 via-[#042f24]/50 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-2">New Marketing Assets</h3>
                                <p className="text-slate-200 mb-6 font-medium max-w-sm text-sm">
                                    Download our updated Q4 pitch decks and updated rate sheets to share with your clients.
                                </p>
                                <button className="bg-white text-slate-900 font-bold px-6 py-2.5 rounded-lg hover:bg-slate-100 transition-colors text-sm">
                                    Browse Library
                                </button>
                            </div>
                        </div>

                        {/* STRATMIRE TIER PROGRESS TRACKER (Level 1 -> Level 2) */}
                        <div className="rounded-2xl p-8 shadow-lg relative overflow-hidden bg-gradient-to-br from-[#41310A] to-[#1F1705] border border-[#6B5215]/50">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                                    <Target size={20} />
                                    <h3 className="text-xl font-black tracking-wide">Level 2 Producer Update</h3>
                                </div>

                                <p className="text-[#A48F53] text-sm mb-6 leading-relaxed">
                                    You are currently earning <strong className="text-white">50% commission</strong>. Hit these targets to unlock the <strong>60% Producer Tier</strong> plus a 5% lifetime trail on team production.
                                </p>

                                <div className="space-y-4">
                                    {/* Goal 1: Team Members */}
                                    <div>
                                        <div className="flex justify-between text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                                            <span>Team Built (Current: 3)</span>
                                            <span>Target: 5 Members</span>
                                        </div>
                                        <div className="w-full bg-black/40 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-[#BFA054] to-[#F1DE8B] h-2 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>

                                    {/* Goal 2: Closed Deals */}
                                    <div>
                                        <div className="flex justify-between text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                                            <span>Funded Deals (Current: 2)</span>
                                            <span>Target: 4 Deals / Yr</span>
                                        </div>
                                        <div className="w-full bg-black/40 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-[#BFA054] to-[#F1DE8B] h-2 rounded-full" style={{ width: '50%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-medium text-[#A48F53]">
                                    <span>* 10% referral closing bonus active</span>
                                    <span>No min. production required for current tier</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* FOOTER TEXT */}
                    <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-slate-400 pb-8 px-2 uppercase tracking-wider">
                        <p>© 2026 STRATMIRE CAPITAL. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-6 mt-4 sm:mt-0">
                            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                            <a href="#" className="hover:text-slate-600 transition-colors">Compliance</a>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}