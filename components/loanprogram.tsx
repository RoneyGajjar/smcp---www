import React from 'react'

const Loanprogram = () => {
    return (
        <>
            <section className="py-24 bg-surface">
                <div className="max-w-8xl mx-auto px-8">
                    <div className="text-center mb-16">
                        {/* <span className="font-headline font-bold tracking-widest text-[10px] uppercase mb-4 block text-secondary">WHAT WE OFFER</span> */}
                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-primary">Our Loan Programs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Business Funding */}
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front border border-primary/5 bg-primary">
                                    <div className="w-16 h-16 mb-8 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-5xl text-secondary-fixed">payments</span>
                                    </div>
                                    <h3 className="text-2xl font-headline font-extrabold text-white mb-6 uppercase tracking-tight">Business Loan</h3>
                                </div>
                                <div className="flip-card-back border border-white/5 bg-primary">
                                    <p className="text-gray-300 font-body mb-10 leading-relaxed text-sm">
                                        Scalable capital solutions for enterprise growth, inventory expansion, and strategic acquisitions. Engineered for rapid deployment and long-term stability.
                                    </p>
                                    <a className="bg-white text-primary font-headline font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-secondary-fixed hover:text-primary transition-all rounded-md shadow-xl" href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Commercial Property */}
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front border border-primary/5 bg-primary">
                                    <div className="w-20 h-20 mb-8 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-5xl text-secondary-fixed">corporate_fare</span>
                                    </div>
                                    <h3 className="text-2xl font-headline font-extrabold text-white mb-6 uppercase tracking-tight">Commercial Property</h3>
                                </div>
                                <div className="flip-card-back border border-white/5 bg-primary">
                                    <p className="text-gray-300 font-body mb-10 leading-relaxed text-sm">
                                        Tier-one financing for multi-family, industrial, and retail developments. We offer competitive LTV ratios and flexible amortization schedules.
                                    </p>
                                    <a className="bg-white text-primary font-headline font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-secondary-fixed hover:text-primary transition-all rounded-md shadow-xl" href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Investment Loans */}
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front border border-primary/5 bg-primary">
                                    <div className="w-20 h-20 mb-8 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-5xl text-secondary-fixed">trending_up</span>
                                    </div>
                                    <h3 className="text-2xl font-headline font-extrabold text-white mb-6 uppercase tracking-tight">Investment Propertry</h3>
                                </div>
                                <div className="flip-card-back border border-white/5 bg-primary">
                                    <p className="text-gray-300 font-body mb-10 leading-relaxed text-sm">
                                        Flexible credit facilities tailored for portfolio diversification and high-yield investment opportunities. Designed for savvy real estate investors.
                                    </p>
                                    <a className="bg-white text-primary font-headline font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-secondary-fixed hover:text-primary transition-all rounded-md shadow-xl" href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Commercial Property */}
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front border border-primary/5 bg-primary">
                                    <div className="w-20 h-20 mb-8 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-5xl text-secondary-fixed">corporate_fare</span>
                                    </div>
                                    <h3 className="text-2xl font-headline font-extrabold text-white mb-6 uppercase tracking-tight">Construction Property</h3>
                                </div>
                                <div className="flip-card-back border border-white/5 bg-primary">
                                    <p className="text-gray-300 font-body mb-10 leading-relaxed text-sm">
                                        Tier-one financing for multi-family, industrial, and retail developments. We offer competitive LTV ratios and flexible amortization schedules.
                                    </p>
                                    <a className="bg-white text-primary font-headline font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-secondary-fixed hover:text-primary transition-all rounded-md shadow-xl" href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loanprogram