"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { ArrowLeft, Building2, Mail, Phone, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function PartnerReviewPage() {
    const params = useParams();
    const router = useRouter();
    const supabase = createClient();
    const partnerId = params.id as string;

    const [partner, setPartner] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        async function fetchPartner() {
            const { data, error } = await supabase.from('loan_partners').select('*').eq('id', partnerId).single();
            if (!error && data) setPartner(data);
            setIsLoading(false);
        }
        fetchPartner();
    }, [partnerId, supabase]);

    const handleStatusUpdate = async (newStatus: 'APPROVED' | 'REJECTED') => {
        setIsUpdating(true);
        const { error } = await supabase
            .from('loan_partners')
            .update({ status: newStatus })
            .eq('id', partnerId);

        if (!error) {
            setPartner({ ...partner, status: newStatus });
        } else {
            alert("Failed to update partner status.");
        }
        setIsUpdating(false);
    };

    if (isLoading) return <div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-500">Loading Partner Profile...</div>;
    if (!partner) return <div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-red-500">Partner not found.</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-8 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => router.push('/admin')} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Dashboard
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 pb-8 mb-8 gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
                                <Building2 size={32} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">{partner.full_legal_name}</h1>
                                <p className="text-slate-500 mt-1">{partner.business_name || 'Independent Partner'}</p>
                            </div>
                        </div>

                        {/* STATUS BADGE */}
                        <div className={`px-4 py-2 rounded-lg border flex items-center gap-2 font-bold text-sm ${partner.status === 'APPROVED' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                                partner.status === 'REJECTED' ? 'bg-red-50 border-red-200 text-red-700' :
                                    'bg-amber-50 border-amber-200 text-amber-700'
                            }`}>
                            {partner.status === 'APPROVED' ? <CheckCircle2 size={18} /> :
                                partner.status === 'REJECTED' ? <XCircle size={18} /> : <Clock size={18} />}
                            {partner.status || 'PENDING'}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                            <p className="font-medium text-slate-900 flex items-center gap-2"><Mail size={16} className="text-slate-400" /> {partner.email}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
                            <p className="font-medium text-slate-900 flex items-center gap-2"><Phone size={16} className="text-slate-400" /> {partner.phone}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Applied On</p>
                            <p className="font-medium text-slate-900">{new Date(partner.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* APPROVAL CONTROLS */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col sm:flex-row justify-end gap-4 mt-8">
                        <button
                            disabled={isUpdating || partner.status === 'REJECTED'}
                            onClick={() => handleStatusUpdate('REJECTED')}
                            className="px-6 py-3 bg-white border border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 disabled:opacity-50 transition-colors"
                        >
                            Reject Partner
                        </button>
                        <button
                            disabled={isUpdating || partner.status === 'APPROVED'}
                            onClick={() => handleStatusUpdate('APPROVED')}
                            className="px-6 py-3 bg-[#0a6c50] text-white font-bold rounded-lg hover:bg-[#085a42] disabled:opacity-50 transition-colors flex items-center gap-2"
                        >
                            <CheckCircle2 size={20} /> Approve Account Access
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}