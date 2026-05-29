import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#052c24] text-white py-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="md:col-span-1">
                            <div className="text-2xl font-black tracking-tighter font-headline mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 bg-white text-primary flex items-center justify-center rounded-md text-sm italic">S</span>
                                STRATMIRE
                            </div>
                            <p className="text-primary-fixed/60 text-sm leading-relaxed font-body">
                                Premier nationwide loan brokerage providing high-velocity capital solutions for investors and businesses.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-headline font-extrabold text-xs uppercase tracking-widest mb-8 text-secondary-fixed">Quick Links</h5>
                            <ul className="space-y-4 text-sm text-primary-fixed/80 font-body">
                                <li><a className="hover:text-white transition-colors" href="./">Home</a></li>
                                <li><a className="hover:text-white transition-colors" href="./loan-programs">Loan Programs</a></li>
                                <li><a className="hover:text-white transition-colors" href="./how-it-works">How it Works</a></li>
                                <li><a className="hover:text-white transition-colors" href="./contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-headline font-extrabold text-xs uppercase tracking-widest mb-8 text-secondary-fixed">Legal</h5>
                            <ul className="space-y-4 text-sm text-primary-fixed/80 font-body">
                                <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Licensing Info</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Security</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-headline font-extrabold text-xs uppercase tracking-widest mb-8 text-secondary-fixed">Follow Us</h5>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-md hover:bg-white/10 transition-all" href="#">
                                    <span className="material-symbols-outlined text-lg text-primary-fixed">share</span>
                                </a>
                                <a className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-md hover:bg-white/10 transition-all" href="#">
                                    <span className="material-symbols-outlined text-lg text-primary-fixed">mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[11px] text-primary-fixed/40 font-headline font-bold uppercase tracking-widest">
                            © 2024 STRATMIRE CAPITAL PARTNERS. ALL RIGHTS RESERVED.
                        </p>
                        <div className="flex gap-8">
                            <span className="text-[10px] text-primary-fixed/40 font-bold uppercase tracking-widest">Equal Housing Lender</span>
                            <span className="text-[10px] text-primary-fixed/40 font-bold uppercase tracking-widest">NMLS Pending</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer