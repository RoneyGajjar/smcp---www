"use client"
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase";
import { ArrowLeft, Save, User, ShieldCheck, Mail, Phone, MapPin, Briefcase, FileCode2 } from 'lucide-react';

export default function ApplicationDetailPage() {
    const params = useParams();
    const router = useRouter();
    const supabase = createClient();

    const applicationId = params.id as string;

    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<any>(null);

    // States to handle raw JSON string editing for arrays
    const [addressJson, setAddressJson] = useState("");
    const [jobsJson, setJobsJson] = useState("");

    useEffect(() => {
        async function fetchApplication() {
            if (!applicationId) return;

            const { data, error } = await supabase
                .from('borrowers')
                .select('*')
                .eq('id', applicationId)
                .single();

            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setFormData(data);
                // Pre-fill the JSON editors with pretty-printed arrays
                setAddressJson(JSON.stringify(data.address_history || [], null, 2));
                setJobsJson(JSON.stringify(data.employment_history || [], null, 2));
            }
            setIsLoading(false);
        }

        fetchApplication();
    }, [applicationId]);

    // Handle standard text/select inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    // Push updates back to the database
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        // Safely try to parse the JSON arrays edited by the admin
        let parsedAddresses = formData.address_history;
        let parsedJobs = formData.employment_history;
        try {
            parsedAddresses = JSON.parse(addressJson);
            parsedJobs = JSON.parse(jobsJson);
        } catch (error) {
            alert("Invalid JSON format in the Advanced Data section. Please fix it before saving.");
            setIsSaving(false);
            return;
        }

        const { error } = await supabase
            .from('borrowers')
            .update({
                // Identity
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,

                // Demographics & Sensitive
                ssn: formData.ssn,
                birth_date: formData.birth_date,
                citizenship_status: formData.citizenship_status,
                marital_status: formData.marital_status,
                language_preference: formData.language_preference,

                // Status Flags
                has_military_service: formData.has_military_service,
                military_status: formData.military_status,
                has_homeownership_education: formData.has_homeownership_education,

                // Arrays (JSONB)
                address_history: parsedAddresses,
                employment_history: parsedJobs
            })
            .eq('id', applicationId);

        setIsSaving(false);

        if (error) {
            alert("Failed to update record: " + error.message);
        } else {
            alert("Application successfully updated.");
            router.push('/Admin');
        }
    };

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-[#0a4233] font-bold">Loading Vault Record...</div>;
    }

    if (!formData) {
        return <div className="min-h-screen flex items-center justify-center text-red-500 font-bold">Application Not Found</div>;
    }

    // Base input styling for consistency
    const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#042f24]/20 font-medium";
    const labelClass = "text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block";

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased pb-20">

            {/* ADMIN HEADER */}
            <nav className="h-[72px] bg-[#042f24] text-white flex items-center px-6 lg:px-8 border-b border-white/10 sticky top-0 z-20">
                <button onClick={() => router.back()} className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors font-bold text-sm tracking-wider uppercase">
                    <ArrowLeft size={18} /> Back to Dashboard
                </button>
            </nav>

            <main className="max-w-5xl mx-auto pt-10 px-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Application File</h1>
                        <p className="text-slate-500 mt-1 font-medium">Record ID: {applicationId}</p>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-700">
                        Full Edit Mode
                    </span>
                </div>

                <form onSubmit={handleSave} className="space-y-8">

                    {/* 1. IDENTITY & CONTACT */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold text-[#042f24] flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
                            <User size={20} className="text-emerald-500" /> Borrower Identity
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>First Name</label>
                                <input type="text" name="first_name" value={formData.first_name || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Last Name</label>
                                <input type="text" name="last_name" value={formData.last_name || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Email Address</label>
                                <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 2. DEMOGRAPHICS & SENSITIVE */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold text-[#042f24] flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
                            <ShieldCheck size={20} className="text-emerald-500" /> Demographics & Compliance
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className={labelClass}>Social Security Number</label>
                                <input type="text" name="ssn" value={formData.ssn || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Date of Birth</label>
                                <input type="date" name="birth_date" value={formData.birth_date || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Citizenship Status</label>
                                <select name="citizenship_status" value={formData.citizenship_status || ""} onChange={handleInputChange} className={inputClass}>
                                    <option value="">Select...</option>
                                    <option value="us-citizen">U.S. Citizen</option>
                                    <option value="permanent-resident">Permanent Resident</option>
                                    <option value="non-resident">Non-Resident Alien</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Marital Status</label>
                                <select name="marital_status" value={formData.marital_status || ""} onChange={handleInputChange} className={inputClass}>
                                    <option value="">Select...</option>
                                    <option value="married">Married</option>
                                    <option value="separated">Separated</option>
                                    <option value="unmarried">Unmarried</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Language Preference</label>
                                <input type="text" name="language_preference" value={formData.language_preference || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 3. BACKGROUND & SERVICE */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold text-[#042f24] flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
                            <Briefcase size={20} className="text-emerald-500" /> Background & Service
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Military Service?</label>
                                <select name="has_military_service" value={formData.has_military_service ? "true" : "false"} onChange={(e) => setFormData((p: any) => ({ ...p, has_military_service: e.target.value === "true" }))} className={inputClass}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Military Status</label>
                                <input type="text" name="military_status" value={formData.military_status || ""} onChange={handleInputChange} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Completed Home Education?</label>
                                <select name="has_homeownership_education" value={formData.has_homeownership_education ? "true" : "false"} onChange={(e) => setFormData((p: any) => ({ ...p, has_homeownership_education: e.target.value === "true" }))} className={inputClass}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* 4. ADVANCED DATA (JSON Arrays) */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold text-[#042f24] flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
                            <FileCode2 size={20} className="text-emerald-500" /> Advanced Data (Raw Output)
                        </h2>
                        <p className="text-sm text-slate-500 mb-6">
                            These fields contain the complex arrays submitted by the user. You can edit the raw JSON directly to fix typos in addresses or employment data.
                        </p>

                        <div className="grid grid-cols-1 gap-8">
                            <div>
                                <label className={labelClass}>Address History Array</label>
                                <textarea
                                    rows={8}
                                    value={addressJson}
                                    onChange={(e) => setAddressJson(e.target.value)}
                                    className="w-full bg-slate-900 text-emerald-400 font-mono text-xs p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Employment History Array</label>
                                <textarea
                                    rows={8}
                                    value={jobsJson}
                                    onChange={(e) => setJobsJson(e.target.value)}
                                    className="w-full bg-slate-900 text-emerald-400 font-mono text-xs p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SAVE CONTROLS */}
                    <div className="flex justify-end gap-4 pt-6">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-6 py-3 font-bold text-slate-500 hover:text-slate-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-[#042f24] hover:bg-[#0a4233] text-white px-10 py-3 rounded-lg font-bold flex items-center gap-2 shadow-md transition-all disabled:opacity-50"
                        >
                            <Save size={18} /> {isSaving ? "Saving..." : "Save Full Profile"}
                        </button>
                    </div>

                </form>
            </main>
        </div>
    );
}