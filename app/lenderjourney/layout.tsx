import React from 'react';
import { Banknote, FileCheck, Handshake, Check, Headset} from "lucide-react";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
export default function LenderJourneyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      {/* Top Navigation */}
      {/* <Navbar /> */}

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-24 relative">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Wrapper */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-headline font-bold tracking-widest text-[10px] uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
                Capital Partner Application
              </span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-[-0.02em] leading-tight">
                Get Matched with the <span className="text-secondary">Right Deals</span>.
              </h1>
              <p className="text-on-surface-variant font-body text-lg max-w-2xl mt-2">
                Stop chasing dead ends. Access our private pipeline of pre-qualified, high-yield commercial real estate opportunities curated for institutional capital.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-surface p-8 md:p-10 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold text-sm">1</div>
                  <span className="font-headline font-bold text-primary">Originator Details</span>
                </div>
                <div className="h-px bg-outline-variant/30 flex-grow"></div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-8 h-8 rounded-full border border-outline-variant text-on-surface-variant flex items-center justify-center font-headline font-bold text-sm">2</div>
                  <span className="font-headline font-bold text-on-surface-variant">Lending Criteria</span>
                </div>
              </div>

              {children}
              
            </div>
          </div>

          {/* Right Column: Context & Proof */}
          <div className="lg:col-span-5 flex flex-col gap-8 pt-4 md:pt-12">
            <div className="bg-surface p-8 border-l-4 border-primary rounded-md border border-gray-100 flex flex-col gap-6">
              <h3 className="font-headline text-xl font-bold text-primary border-b border-outline-variant/20 pb-4">Why Lenders Partner With Us</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary-fixed w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm">Institutional Grade Underwriting</h4>
                    <p className="font-body text-gray-600 text-xs mt-1">Every deal is pre-vetted with comprehensive data tapes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary-fixed w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm">Zero Origination Friction</h4>
                    <p className="font-body text-gray-600 text-xs mt-1">We handle the sourcing, structuring, and initial diligence.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary-fixed w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm">Direct Sponsor Access</h4>
                    <p className="font-body text-gray-600 text-xs mt-1">No middle-men post-match. Direct line to high-net-worth borrowers.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative bg-surface p-8 rounded-md border border-gray-100 mt-4">
              <span className="material-symbols-outlined absolute top-4 left-4 text-outline-variant/20 text-6xl rotate-180" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="font-body text-on-surface italic relative z-10 text-sm leading-relaxed mb-6 pl-4">
                "The Private Vault's deal flow is unmatched in quality. Their underwriting package is so thorough that our credit committee approves their submissions in half the time of other sources."
              </p>
              <div className="flex items-center gap-4 pl-4 relative z-10">
                <img alt="Partner Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATupvz0njFDchPwfAjT6rFtC8QQ-ObtiZdcowuwFJ4imhdbcVxo2tMTdk-2OZu-UdcXMMkLX7WBMJTPru3kg_0teIfBsjyjzAi3qDDEmTSXM_Ptz2bmoy18tMmUozrUZEx5THNRo2ntx-62e_h8ZvBT8rdS_55ob6RZ-1iToiYvwq80D2Zk88CD6nHXyQDUAIYDdDupB0teSfsXgSLWqCZM472K77CNiimnGXrFTMN7UBUKjBjgXP5ZA8pk8yAbjd1oAszbMVXug4" />
                <div>
                  <h5 className="font-headline font-bold text-primary text-sm">Marcus Sterling</h5>
                  <span className="font-label text-gray-500 text-xs uppercase tracking-wider">Managing Director, Apex Yield</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Empower Section */}
        <section className="flex flex-col gap-12 mt-12 bg-white py-12">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-extrabold text-primary">How The Vault Empowers Lenders</h2>
            <p className="text-gray-500 font-body mt-3">A streamlined ecosystem designed for rapid deployment of capital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 text-center border border-gray-100 group rounded-md shadow-md">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Banknote className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Zero Cost to Lenders</h3>
              <p className="font-body text-xs leading-relaxed text-gray-600">Our model is borrower-paid. You access premium deal flow without subscription fees or point-sharing.</p>
            </div>
            
            <div className="bg-surface p-10 text-center border border-gray-100 group rounded-md shadow-md">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FileCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Pre-Vetted Packages</h3>
              <p className="font-body text-xs leading-relaxed text-gray-600">Every opportunity includes appraisals, environmental reports, and sponsor background checks.</p>
            </div>

            <div className="bg-surface p-10 text-center border border-gray-100 group rounded-md shadow-md">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Handshake className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline font-extrabold text-sm text-primary mb-4 uppercase tracking-wider">Instant Matching Logic</h3>
              <p className="font-body text-xs leading-relaxed text-gray-600">Set your criteria once. Our algorithm only notifies you when a deal perfectly aligns with your mandate.</p>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-primary rounded-md overflow-hidden relative vault-gradient border-t border-primary-container">
          <div className="relative z-10 py-16 px-8 flex flex-col md:flex-row justify-around items-center gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col gap-2 w-full md:w-1/3 pt-6 md:pt-0">
              <span className="font-headline text-5xl font-black text-white">$50B+</span>
              <span className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary-fixed">Loan Volume Processed</span>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/3 pt-6 md:pt-0">
              <span className="font-headline text-5xl font-black text-white">2,400+</span>
              <span className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary-fixed">Active Capital Partners</span>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/3 pt-6 md:pt-0">
              <span className="font-headline text-5xl font-black text-white">0%</span>
              <span className="font-headline font-bold text-[10px] uppercase tracking-widest text-secondary-fixed">Cost to Lenders</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface rounded-md border border-gray-100 p-12 text-center flex flex-col items-center gap-6 mb-12 shadow-md">
          <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
            <Headset className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-2 max-w-lg">
            <h2 className="font-headline text-2xl font-bold text-primary">Need assistance with your setup?</h2>
            <p className="font-body text-gray-600 text-sm">Our Partner Success team is available to help configure your lending criteria and walk you through the platform.</p>
          </div>
          <button className="mt-4 bg-secondary text-white font-headline font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-md hover:brightness-110 transition-all flex items-center gap-2 shadow-lg">
            Schedule a Partner Call
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}