"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase";
import { ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';

export default function BecomePartnerPage() {
    const router = useRouter();
    const supabase = createClient();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        businessName: '', city: '', state: '', referringCode: '',
        wantsOverride: 'no', signature: ''
    });

    const [agreed, setAgreed] = useState({
        accurate: false, consented: false, noMisleading: false, complies: false
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed.accurate || !agreed.consented || !agreed.noMisleading || !agreed.complies) {
            alert("You must agree to all compliance checkboxes before submitting.");
            return;
        }

        setIsSubmitting(true);

        const { error } = await supabase.from('loan_partners').insert([{
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.businessName,
            city: formData.city,
            state: formData.state,
            referring_partner_code: formData.referringCode,
            wants_override: formData.wantsOverride === 'yes',
            signature_name: formData.signature,
            status: 'PENDING'
        }]);

        setIsSubmitting(false);

        if (error) {
            alert("Failed to submit application: " + error.message);
        } else {
            alert("Application submitted successfully! Our admin team will review it shortly.");
            router.push('/'); // Redirect home
        }
    };

    const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#042f24]/20 font-medium";
    const labelClass = "text-sm font-bold text-slate-700 mb-2 block";

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">

                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-[#042f24] tracking-tight">Loan Partner Application</h1>
                    <p className="mt-4 text-slate-600 text-lg">Capital without limits. Solutions without compromise.</p>
                </header>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 space-y-10">

                    {/* SECTION 1: Applicant Info */}
                    <section>
                        <h2 className="text-xl font-bold text-[#042f24] border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
                            <Briefcase className="text-emerald-600" size={20} /> Partner Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><label className={labelClass}>First Name *</label><input required type="text" name="firstName" value={formData.firstName} onChange={handleInput} className={inputClass} /></div>
                            <div><label className={labelClass}>Last Name *</label><input required type="text" name="lastName" value={formData.lastName} onChange={handleInput} className={inputClass} /></div>
                            <div><label className={labelClass}>Email Address *</label><input required type="email" name="email" value={formData.email} onChange={handleInput} className={inputClass} /></div>
                            <div><label className={labelClass}>Phone Number *</label><input required type="tel" name="phone" value={formData.phone} onChange={handleInput} className={inputClass} /></div>
                            <div className="md:col-span-2"><label className={labelClass}>Business Name (If applicable)</label><input type="text" name="businessName" value={formData.businessName} onChange={handleInput} className={inputClass} /></div>
                            <div><label className={labelClass}>City *</label><input required type="text" name="city" value={formData.city} onChange={handleInput} className={inputClass} /></div>
                            <div><label className={labelClass}>State *</label><input required type="text" name="state" value={formData.state} onChange={handleInput} className={inputClass} /></div>
                        </div>
                    </section>

                    {/* SECTION 2: Referral & Overrides */}
                    <section>
                        <h2 className="text-xl font-bold text-[#042f24] border-b border-slate-100 pb-3 mb-6">Referral Details</h2>
                        <div className="space-y-6">
                            <div>
                                <label className={labelClass}>Were you referred by an existing partner? (Enter their Unique Code)</label>
                                <input type="text" name="referringCode" placeholder="e.g. JOHN1234" value={formData.referringCode} onChange={handleInput} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Do you intend to receive recruiting override compensation?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="wantsOverride" value="yes" checked={formData.wantsOverride === 'yes'} onChange={handleInput} className="w-4 h-4 text-[#042f24]" /> Yes</label>
                                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="wantsOverride" value="no" checked={formData.wantsOverride === 'no'} onChange={handleInput} className="w-4 h-4 text-[#042f24]" /> No</label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: Compliance */}
                    <section>
                        <h2 className="text-xl font-bold text-[#042f24] border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
                            <ShieldCheck className="text-emerald-600" size={20} /> Compliance & Acknowledgment
                        </h2>
                        <p className="text-sm text-slate-500 mb-4">By submitting this referral, the Partner confirms:</p>
                        <div className="space-y-3">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required checked={agreed.accurate} onChange={(e) => setAgreed({ ...agreed, accurate: e.target.checked })} className="mt-1 w-4 h-4 rounded border-slate-300 text-[#042f24]" />
                                <span className="text-sm font-medium text-slate-700">The information provided is accurate</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required checked={agreed.consented} onChange={(e) => setAgreed({ ...agreed, consented: e.target.checked })} className="mt-1 w-4 h-4 rounded border-slate-300 text-[#042f24]" />
                                <span className="text-sm font-medium text-slate-700">The referred individual has consented to being contacted (if applicable)</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required checked={agreed.noMisleading} onChange={(e) => setAgreed({ ...agreed, noMisleading: e.target.checked })} className="mt-1 w-4 h-4 rounded border-slate-300 text-[#042f24]" />
                                <span className="text-sm font-medium text-slate-700">No misleading or false representations were made</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required checked={agreed.complies} onChange={(e) => setAgreed({ ...agreed, complies: e.target.checked })} className="mt-1 w-4 h-4 rounded border-slate-300 text-[#042f24]" />
                                <span className="text-sm font-medium text-slate-700">The referral complies with all applicable laws and Company policies</span>
                            </label>
                        </div>
                    </section>

                    {/* SECTION 4: Signature */}
                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <label className={labelClass}>Digital Signature (Type Full Name) *</label>
                        <input required type="text" name="signature" placeholder="John Doe" value={formData.signature} onChange={handleInput} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#042f24]/20 font-serif italic text-lg" />
                        <p className="text-xs text-slate-500 mt-2">By typing your name, you are signing this application electronically.</p>
                    </section>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#042f24] hover:bg-[#0a4233] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50">
                        {isSubmitting ? "Submitting..." : "Submit Partner Application"} <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}