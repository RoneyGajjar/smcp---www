import React from 'react'

const Loanpartner = () => {
    return (
        <>
            <section className="py-24 bg-primary-container text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-secondary-fixed font-headline font-bold tracking-widest text-[10px] uppercase mb-4 block">EXPANSION OPPORTUNITY</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight leading-tight mb-8">
                                Become a Loan Partner
                            </h2>
                            <p className="text-lg text-primary-fixed font-body leading-relaxed mb-12 max-w-xl opacity-90">
                                Partner with the fastest growing commercial loan marketplace. We provide the infrastructure; you provide the vision.
                            </p>
                            <a href="/become-partner">
                                <button className="bg-secondary text-on-secondary px-10 py-5 font-headline font-extrabold text-xs uppercase tracking-widest rounded-md hover:brightness-110 shadow-xl transition-all">
                                    Join As Loan Partner
                                </button>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                            <div className="flex flex-col gap-4">
                                <span className="material-symbols-outlined text-3xl text-secondary-fixed">check_circle</span>
                                <h4 className="font-headline font-extrabold text-sm uppercase">No Licensing</h4>
                                <p className="text-primary-fixed/70 text-xs leading-relaxed">Focus on deal flow while we handle the regulatory framework.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="material-symbols-outlined text-3xl text-secondary-fixed">handshake</span>
                                <h4 className="font-headline font-extrabold text-sm uppercase">Compensation</h4>
                                <p className="text-primary-fixed/70 text-xs leading-relaxed">Earn significant rewards for recruiting new partners to the network.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="material-symbols-outlined text-3xl text-secondary-fixed">public</span>
                                <h4 className="font-headline font-extrabold text-sm uppercase">Nationwide Reach</h4>
                                <p className="text-primary-fixed/70 text-xs leading-relaxed">Work across all 50 states and various commercial asset classes.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="material-symbols-outlined text-3xl text-secondary-fixed">bolt</span>
                                <h4 className="font-headline font-extrabold text-sm uppercase">Fast Payouts</h4>
                                <p className="text-primary-fixed/70 text-xs leading-relaxed">Automated system ensures commissions are cleared upon funding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loanpartner