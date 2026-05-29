import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

export default function LoanPrograms() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="vault-gradient text-white py-24 px-8 overflow-hidden relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-3/5 z-10">
              <span className="text-secondary-fixed font-headline font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                Institutional Grade Funding
              </span>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tight mb-8 leading-[1.1]">
                The Modern Standard for <span className="text-secondary-fixed">Capital Placement.</span>
              </h1>
              <p className="font-body text-lg text-primary-fixed/80 max-w-xl leading-relaxed mb-10">
                Strategic liquidity solutions for high-performance enterprises and real estate visionaries. We provide the architecture for your growth.
              </p>
            </div>
            <div className="md:w-2/5 relative">
              <div className="aspect-[4/5] w-full rounded-lg overflow-hidden nexos-shadow">
                <img 
                  alt="Modern architectural detail" 
                  className="w-full h-full object-cover grayscale contrast-125 opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPTdV8OMqTOWPOwq4gPGcN9KgtYqi4tuYH6yatTnFU6WkxUN2mEGbrXcXIlMrYqSaSnaatltXohH84X2qqgZDfbA8Hg46KKYXaxQDdMevoV0NkkjLPA7eMlN_y4wpcZF3MxfSCbmo_huCyDx-wmT_g0kcAFZvvBiO0-VTUxs1NQVsy5MHxSvJ0WZeEuvcD1W5yJVVbO5XlNgwhLuuC57xFw05mUqClrMCuAn64LJwfXS3ke9jZONVhfikeWniElCAYeDOcNRfzYqU" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Loan Programs Grid */}
        <section className="bg-surface py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Business Funding Card */}
              <div className="bg-white rounded-xl border border-outline-variant/30 p-8 lg:p-10 nexos-shadow space-y-10">
                <div className="border-b border-outline-variant/30 pb-8">
                  <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-3">
                    Business Funding
                  </h2>
                  <p className="text-on-surface-variant font-body text-lg">
                    Tailored capital solutions for operational scaling and growth.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* 01 Working Capital Loans */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Working Capital Loans</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Bridge gaps in cash flow and cover everyday operational expenses with flexible, low-friction capital infusions.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 02 Business Credit Cards */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Business Credit Cards</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        High-limit corporate cards with premium rewards and specialized expense management tools for your team.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 03 Equipment Funding */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Equipment Funding</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Finance the tools you need to succeed, from medical technology to advanced manufacturing equipment.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 04 Truck & Heavy Equipment Loans */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Truck & Heavy Equipment Loans</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Specialized financing for fleets, logistics, and heavy construction machinery with flexible repayment terms.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 05 Business Lines of Credit */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Business Lines of Credit</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Revolving credit that gives you on-demand access to capital whenever opportunity or necessity arises.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 06 Term Loans */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Term Loans</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Traditional lump-sum funding with fixed repayment schedules, ideal for major expansion projects.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 07 SBA Loan */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">SBA Loan</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Government-backed financing offering favorable terms and lower down payments for small business growth.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 08 Business Acquisition Loans */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Business Acquisition Loans</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Funding designed to facilitate the purchase of an existing business or competitor to scale your footprint.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 09 Accounts Receivable Funding */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Accounts Receivable Funding</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Unlock the value of your outstanding invoices and get paid immediately instead of waiting for net terms.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 10 Gap Funding */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Gap Funding</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Short-term liquidity solutions to bridge the period between immediate funding needs and permanent financing.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>
                </div>
              </div>

              {/* Commercial Funding Card */}
              <div className="bg-white rounded-xl border border-outline-variant/30 p-8 lg:p-10 nexos-shadow space-y-10">
                <div className="border-b border-outline-variant/30 pb-8">
                  <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-3">
                    Commercial Funding
                  </h2>
                  <p className="text-on-surface-variant font-body text-lg">
                    Institutional architecture for real estate and commercial assets.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* 01 1-4 Unit Investment Properties */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">1-4 Unit Investment Properties</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Scaling solutions for residential portfolios, focusing on long-term rental appreciation and DSCR models.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 02 Fix & Flip/Hold */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Fix & Flip/Hold</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Short-term bridge capital for acquisition and renovation of distressed properties with high-ROI potential.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 03 Multi-Family Loan */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Multi-Family Loan</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Institutional grade financing for 5+ unit apartment complexes, offering competitive leverage and terms.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 04 Mixed Use Properties */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Mixed Use Properties</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Capital for properties combining residential and commercial space, tailored to unique urban development needs.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 05 Commercial Properties */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Commercial Properties</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Financing for retail, office, and industrial assets with sophisticated debt structures for high-value acquisitions.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 06 Land Loan */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Land Loan</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Raw land or improved lot financing for future development or tactical asset holding.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>

                  {/* 07 Construction Loan */}
                  <details className="group bg-surface rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-outline-variant/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                      <h3 className="font-headline font-bold text-base text-primary">Construction Loan</h3>
                      <span className="material-symbols-outlined expand-icon text-outline transition-transform duration-300">expand_more</span>
                    </summary>
                    <div className="px-5 pb-6">
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        Ground-up development financing for commercial and large-scale residential projects with interest-only periods.
                      </p>
                      <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-headline font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </details>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 bg-primary-container text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-8 tracking-tight">
              Ready to unlock your capital potential?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-secondary text-on-secondary px-10 py-5 rounded-md font-headline font-bold uppercase tracking-wider text-sm shadow-xl hover:brightness-110 transition-all">
                Start Application
              </button>
              <button className="border border-white text-white px-10 py-5 rounded-md font-headline font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all">
                Consult an Advisor
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}