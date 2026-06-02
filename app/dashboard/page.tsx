"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Home, FolderOpen, Send, ChevronRight, LogOut, CheckCircle2 } from 'lucide-react';

// Define the shape of our application data
type LoanApplication = {
  id: string;
  created_at: string;
  status: string;
  missing_docs: number;
};

export default function MyLoanDashboard() {
  const router = useRouter();
  const supabase = createClient();
  const [userName, setUserName] = useState<string>("Roney Gajjar"); // Defaults to your name if no auth profile is found
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserDashboard() {
      // 1. Get the current logged-in user
      const { data: { user } } = await supabase.auth.getUser();

      if (user?.user_metadata?.first_name) {
        setUserName(`${user.user_metadata.first_name} ${user.user_metadata.last_name || ''}`);
      }

      // 2. Fetch their loan applications from the borrowers table
      // (If you don't have auth enforced yet during testing, this will just fetch recent ones)
      const query = supabase
        .from('borrowers')
        .select('id, created_at, uploaded_documents')
        .order('created_at', { ascending: false });

      // if (user) {
      //   query.eq('email', user.email);
      // }

      const { data, error } = await query.limit(5);

      if (!error && data) {
        // Map the database rows to our UI format
        const mappedApps = data.map((app: any) => {
          // Calculate missing docs based on what they've uploaded vs required
          const uploadedCount = app.uploaded_documents ? Object.keys(app.uploaded_documents).length : 0;
          const missingCount = Math.max(0, 16 - uploadedCount); // Assuming 16 required docs

          return {
            id: app.id,
            created_at: app.created_at,
            status: missingCount === 0 ? 'COMPLETED' : 'IN PROGRESS',
            missing_docs: missingCount
          };
        });
        setApplications(mappedApps);
      }
      setLoading(false);
    }

    fetchUserDashboard();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('currentApplicationId');
    sessionStorage.clear();
    router.push('/login');
  };
  const startNewApplication = () => {
    // Clear out any old session data before starting a new one
    localStorage.removeItem('currentApplicationId');
    sessionStorage.removeItem('activeBorrowerId');
    sessionStorage.removeItem('borrowerInfoDraft');

    // Add ?new=true so the journey page knows to let them start a blank form
    router.push('/userjourney?new=true');
  };

  // Helper to format the date like "Mar 25"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-6 mb-10">
          <div>
            <h1 className="text-4xl font-black text-brand-dark tracking-tight font-headline">My Loan Dashboard</h1>
            <div className="mt-4">
              <Link href="/" className="text-secondary hover:text-primary transition-colors">
                <Home size={28} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-2 text-slate-600 font-medium">
            <span>Welcome {userName}</span>
            <span className="text-slate-300">|</span>
            <button onClick={handleSignOut} className="text-primary hover:text-secondary transition-colors flex items-center gap-1">
              Sign Out <LogOut size={16} />
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-black text-brand-dark mb-6 font-headline">My Loan Applications</h2>

        {/* APPLICATIONS LIST */}
        <div className="space-y-6 mb-12">
          {loading ? (
            <div className="animate-pulse bg-slate-200 h-32 rounded-xl w-full"></div>
          ) : applications.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500">
              You do not have any active loan applications.
            </div>
          ) : (
            applications.map((app) => (
              <div key={app.id} className="bg-brand-dark rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                {/* Info Side */}
                <div className="flex items-start gap-5 relative z-10">
                  <div className="mt-1 bg-white/10 p-3 rounded-lg border border-white/5">
                    <Home size={28} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Full Loan Application</h3>
                    <p className="text-slate-300 text-sm flex items-center gap-2">
                      Started {formatDate(app.created_at)}
                    </p>
                  </div>
                </div>

                {/* Actions Side */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10">

                  {app.status === 'COMPLETED' ? (
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-slate-300 px-6 py-3 rounded-md text-sm font-bold flex items-center justify-center min-w-[200px] h-[48px]">
                      COMPLETED {formatDate(app.created_at)}
                    </div>
                  ) : (
                    <button
                      onClick={() => router.push(`/userjourney?id=${app.id}`)}
                      className="bg-white text-brand-dark px-6 py-3 rounded-md text-sm font-bold flex items-center justify-between min-w-[200px] h-[48px] hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <ChevronRight size={18} className="text-slate-400" />
                      RESUME
                    </button>
                  )}

                  <button
                    onClick={() => {
                      // 1. Force BOTH memory banks to sync to this exact application
                      localStorage.setItem('currentApplicationId', app.id);
                      sessionStorage.setItem('activeBorrowerId', app.id);

                      // 2. Pass the ID directly in the URL to guarantee the page catches it
                      router.push(`/userjourney/documents?id=${app.id}`);
                    }}
                    className="bg-primary/20 hover:bg-primary/40 border border-primary/30 text-white px-6 py-3 rounded-md text-sm font-bold flex items-center justify-between gap-4 h-[48px] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FolderOpen size={18} /> DOCUMENTS
                    </div>
                    {app.missing_docs > 0 ? (
                      <span className="bg-secondary text-brand-dark text-[10px] uppercase tracking-wider px-2 py-1 rounded font-black">
                        {app.missing_docs} TO-DO
                      </span>
                    ) : (
                      <span className="bg-emerald-500 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1 font-black">
                        <CheckCircle2 size={12} /> COMPLETE
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* START ANOTHER LOAN CARD */}
        <button
          onClick={startNewApplication}
          className="w-full md:w-[600px] bg-white border-2 border-slate-200 hover:border-primary/50 hover:shadow-lg rounded-xl p-6 md:p-8 flex items-center gap-6 transition-all group text-left"
        >
          <div className="shrink-0 p-4 rounded-full bg-slate-50 group-hover:bg-primary/5 transition-colors border border-slate-100 group-hover:border-primary/20">
            <Send size={28} className="text-slate-600 group-hover:text-primary transition-colors -ml-1 mt-1" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-brand-dark mb-1 group-hover:text-primary transition-colors">Start Another Loan Application</h3>
            <p className="text-slate-600 text-sm">Click here to begin your loan application</p>
          </div>
        </button>

      </div>
    </div>
  );
}