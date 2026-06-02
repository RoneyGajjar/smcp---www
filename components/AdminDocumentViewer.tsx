"use client"
import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { FileText, Download, ExternalLink, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

// The exact same mapping from your upload page for readable labels
const DOCUMENT_LABELS: Record<string, string> = {
    drivers_license: "Driver's Licence",
    bank_statements: "Bank statement for last 2 months",
    pay_stubs: "Most recent two (2) pay stubs",
    w2_forms: "W2s for 2 most recent years",
    mortgage_statement: "Most recent mortgage statement (for refinance)",
    purchase_agreement: "Fully executed purchase agreement",
    tax_return_personal: "Personal tax return for 2 most recent years",
    tax_return_business: "Business Tax return for most recent 2 years",
    ssn_card: "Social Security Card",
    ssn_awards: "Social Security Awards or Benefit statement",
    va_certificate: "VA certificate of Eligibility",
    homeowners_insurance: "Homeowners insurance policy Declaration page",
    hoa_policy: "HOA policy",
    retirement_income: "Supporting Documents for other Retirement Income",
    hud_certificate: "HUD Certified Counseling Certificate",
    other_documents: "Other documents"
};

export default function AdminDocumentViewer({ borrowerId }: { borrowerId: string }) {
    const supabase = createClient();
    const [documents, setDocuments] = useState<Record<string, string | null>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAndSignDocuments() {
            if (!borrowerId) return;

            try {
                // 1. Fetch the borrower's document paths from the database
                const { data: borrower, error: dbError } = await supabase
                    .from('borrowers')
                    .select('uploaded_documents')
                    .eq('id', borrowerId)
                    .single();

                if (dbError) throw dbError;

                const uploadedDocs = borrower?.uploaded_documents || {};
                const signedUrls: Record<string, string | null> = {};

                // 2. Generate secure 1-hour Signed URLs for every uploaded file
                for (const key of Object.keys(DOCUMENT_LABELS)) {
                    const filePath = uploadedDocs[key];

                    if (filePath) {
                        const { data: signedData, error: signError } = await supabase
                            .storage
                            .from('vault_documents')
                            .createSignedUrl(filePath, 3600); // 3600 seconds = 1 hour expiry

                        if (!signError && signedData) {
                            signedUrls[key] = signedData.signedUrl;
                        } else {
                            signedUrls[key] = null; // Failed to sign or file missing
                        }
                    } else {
                        signedUrls[key] = null; // File was never uploaded
                    }
                }

                setDocuments(signedUrls);
            } catch (err: any) {
                console.error("Error fetching documents:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchAndSignDocuments();
    }, [borrowerId, supabase]);

    // TODO: Rewrite vault-files
    // useEffect(() => {
    //     async function fetchAndSignDocuments() {
    //         if (!borrowerId) return;

    //         try {
    //             const { data: borrower, error: dbError } = await supabase
    //                 .from('borrowers')
    //                 .select('uploaded_documents')
    //                 .eq('id', borrowerId)
    //                 .single();

    //             if (dbError) throw dbError;

    //             const uploadedDocs = borrower?.uploaded_documents || {};
    //             const signedUrls: Record<string, string | null> = {};

    //             // Grab your Supabase URL from your environment variables
    //             const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    //             for (const key of Object.keys(DOCUMENT_LABELS)) {
    //                 const filePath = uploadedDocs[key];

    //                 if (filePath) {
    //                     const { data: signedData, error: signError } = await supabase
    //                         .storage
    //                         .from('vault_documents')
    //                         .createSignedUrl(filePath, 3600);

    //                     if (!signError && signedData) {
    //                         // MASK THE URL: Replace the Supabase domain with our new rewrite path
    //                         const maskedUrl = signedData.signedUrl.replace(
    //                             `${supabaseUrl}/storage/v1/object/sign/vault_documents`,
    //                             '/vault-files'
    //                         );

    //                         signedUrls[key] = maskedUrl;
    //                     } else {
    //                         signedUrls[key] = null;
    //                     }
    //                 } else {
    //                     signedUrls[key] = null;
    //                 }
    //             }

    //             setDocuments(signedUrls);
    //         } catch (err: any) {
    //             console.error("Error fetching documents:", err);
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchAndSignDocuments();
    // }, [borrowerId, supabase]);

    if (loading) {
        return <div className="p-8 text-center text-slate-500 animate-pulse font-bold">Decrypting Secure Vault...</div>;
    }

    if (error) {
        return (
            <div className="p-6 bg-red-50 text-red-600 rounded-xl border border-red-200 flex items-center gap-3">
                <ShieldAlert size={24} />
                <div>
                    <h4 className="font-bold">Vault Access Error</h4>
                    <p className="text-sm">{error}</p>
                </div>
            </div>
        );
    }

    // Calculate completion stats
    const totalRequired = Object.keys(DOCUMENT_LABELS).length;
    const totalUploaded = Object.values(documents).filter(url => url !== null).length;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div>
                    <h2 className="text-2xl font-black text-brand-dark flex items-center gap-2">
                        <FileText className="text-primary" /> Document Vault
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">Securely view applicant files. Links expire in 60 minutes.</p>
                </div>

                <div className="mt-4 md:mt-0 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Completion Status</p>
                    <p className={`text-lg font-black ${totalUploaded === totalRequired ? 'text-emerald-600' : 'text-primary'}`}>
                        {totalUploaded} / {totalRequired} <span className="text-sm font-medium text-slate-600">Files</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {Object.entries(DOCUMENT_LABELS).map(([docKey, label]) => {
                    const downloadUrl = documents[docKey];
                    const isUploaded = !!downloadUrl;

                    return (
                        <div
                            key={docKey}
                            className={`p-4 rounded-xl border flex items-center justify-between transition-all ${isUploaded
                                ? 'bg-white border-slate-200 shadow-sm hover:border-primary/40'
                                : 'bg-slate-50 border-dashed border-slate-200 opacity-60'
                                }`}
                        >
                            <div className="flex items-center gap-3 pr-4">
                                {isUploaded ? (
                                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                                ) : (
                                    <XCircle className="text-slate-400 shrink-0" size={20} />
                                )}
                                <div>
                                    <h4 className={`text-sm font-bold ${isUploaded ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {label}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-0.5 font-mono">
                                        {isUploaded ? 'Verified in Vault' : 'Awaiting Upload'}
                                    </p>
                                </div>
                            </div>

                            {isUploaded && (
                                <div className="flex items-center gap-2 shrink-0">
                                    <a
                                        href={downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors"
                                        title="View Document"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                    <a
                                        href={downloadUrl}
                                        download
                                        className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors"
                                        title="Download File"
                                    >
                                        <Download size={16} />
                                    </a>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    );
}