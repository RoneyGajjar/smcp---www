import React from 'react'

const Howitwork = () => {
    return (
        <>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-headline font-bold tracking-widest text-[10px] uppercase mb-4 block">HOW IT WORKS</span>
                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">Our 4 Steps Process</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="bg-surface p-10 text-center border border-slate-100 group rounded-md shadow-md">
                            <div className="font-headline font-black text-xs mb-4 uppercase text-primary/40">Step 1</div>
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">assignment</span>
                            </div>
                            <h4 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Loan Application</h4>
                            <p className="font-body text-xs leading-relaxed text-gray-600">Begin your journey through our encrypted portal with a high-level summary.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-surface p-10 text-center border border-slate-100 group rounded-md shadow-md">
                            <div className="font-headline font-black text-xs mb-4 uppercase text-primary/40">Step 2</div>
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">analytics</span>
                            </div>
                            <h4 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Analysis</h4>
                            <p className="font-body text-xs leading-relaxed text-gray-600">Our expert analysts review your assets to engineer a bespoke solution.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-surface p-10 text-center border border-slate-100 group rounded-md shadow-md">
                            <div className="font-headline font-black text-xs mb-4 uppercase text-primary/40">Step 3</div>
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">verified</span>
                            </div>
                            <h4 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Loan Approval</h4>
                            <p className="font-body text-xs leading-relaxed text-gray-600">Receive a formal commitment letter detailing your specific capital stack.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="bg-surface p-10 text-center border border-slate-100 group rounded-md shadow-md">
                            <div className="font-headline font-black text-xs mb-4 uppercase text-primary/40">Step 4</div>
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">account_balance</span>
                            </div>
                            <h4 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Loan Funding</h4>
                            <p className="font-body text-xs leading-relaxed text-gray-600">Swift deployment of capital directly into your accounts with zero friction.</p>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <button className="bg-primary text-white px-10 py-5 font-headline font-bold text-xs uppercase tracking-widest rounded-md hover:brightness-110 shadow-lg">
                            Get Approved
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Howitwork