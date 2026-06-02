"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Building2, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function PartnerLogin() {
    const router = useRouter();
    const supabase = createClient();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: loginError } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (loginError) throw loginError;

            // Successfully authenticated! Route to the dashboard.
            // The dashboard will automatically check if they are "APPROVED" or "PENDING".
            router.push('/partner/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">

                <div className="flex flex-col items-center mb-8 text-center">
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-4 border border-teal-100">
                        <Building2 size={32} className="text-[#0a6c50]" />
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Partner Portal</h1>
                    <p className="text-slate-500 text-sm mt-2">Sign in to submit and manage loan scenarios.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0a6c50]/20 focus:border-[#0a6c50] outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="partner@company.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0a6c50]/20 focus:border-[#0a6c50] outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#0a6c50] text-white font-bold py-3.5 rounded-xl hover:bg-[#085a42] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0a6c50]/20 disabled:opacity-70 mt-4"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>

                <div className="mt-8 text-center pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-500">
                        Not a partner yet?{' '}
                        <Link href="/become-partner" className="font-bold text-[#0a6c50] hover:underline">
                            Apply Here
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}