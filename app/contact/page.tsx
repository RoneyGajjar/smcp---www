import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            className="w-full h-full object-cover grayscale" 
            alt="Institutional background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3-d9jb1dYBLqsnulcbrQW2IXZq8LjNTi0gbIz0XwokT6y_A10mtygQ6pnigV51yvZc9fCcObD9ifMhbXfg4QENvzdm96nnCfJuz_UfzgMLtKtB7AppwWa2pe_VSGZhZ7B-Gv-voFvPAVeEoOeWMrCIjS4dfAHv8gxiXkMMRIHvjNOcwFrmpTyMjPvbYMv2Qkf1YUTLfBUb9QEuKprpdJgqhp0-pmxBxoe05elrN4eT-mguTwu1p5XqgvXeJ7bACuTsPSZiZAFkA" 
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-secondary-fixed font-headline font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Institutional Access
            </span>
            <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl tracking-tighter mb-8">
              Contact Our Team
            </h1>
            <p className="text-on-primary-container font-body text-lg max-w-lg leading-relaxed opacity-80">
              Connecting sophisticated capital with architectural investment strategies. Reach out to our dedicated advisory group.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-8 -mt-24 relative z-30 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form (Left) */}
          <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-sm shadow-sm border border-outline/10">
            <h2 className="font-headline font-bold text-2xl text-primary mb-10">Inquiry Submission</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-secondary rounded-sm py-4 px-5 text-sm transition-all"
                    placeholder="Johnathan Sterling"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-secondary rounded-sm py-4 px-5 text-sm transition-all"
                    placeholder="j.sterling@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-secondary rounded-sm py-4 px-5 text-sm transition-all"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                    Company
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-secondary rounded-sm py-4 px-5 text-sm transition-all"
                    placeholder="Strategic Holdings LLC"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-secondary rounded-sm py-4 px-5 text-sm transition-all resize-none"
                  placeholder="How can our capital strategies assist your portfolio?"
                    rows={6}
                ></textarea>
              </div>
              <div className="pt-6">
                <button
                  className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-headline font-bold rounded-sm hover:bg-secondary transition-all flex items-center justify-center gap-3 text-sm"
                  type="submit"
                >
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Info (Right) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Card */}
            <div className="bg-surface-container-low p-10 rounded-sm border-l-4 border-primary transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-on-primary p-3.5 rounded-sm">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-primary">Main Office</h3>
                  <p className="text-on-surface-variant text-sm mt-3 leading-relaxed opacity-80">
                    440 Park Avenue South,<br />
                    Floor 18, New York, NY 10016<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-surface-container-low p-10 rounded-sm border-l-4 border-primary transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-on-primary p-3.5 rounded-sm">
                  <span className="material-symbols-outlined text-xl">phone_in_talk</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-primary">Direct Support</h3>
                  <p className="text-on-surface-variant text-sm mt-3 leading-relaxed opacity-80">
                    Toll-Free: +1 (800) STRAT-MIRE<br />
                    International: +1 (212) 555-0198
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-surface-container-low p-10 rounded-sm border-l-4 border-primary transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-on-primary p-3.5 rounded-sm">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-primary">Inquiries</h3>
                  <p className="text-on-surface-variant text-sm mt-3 leading-relaxed font-medium opacity-80">
                    general@stratmirecapital.com<br />
                    investor.relations@stratmirecapital.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-60 rounded-sm overflow-hidden shadow-sm grayscale opacity-80 hover:opacity-100 transition-opacity">
              <img 
                className="w-full h-full object-cover" 
                alt="Map location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmyeKrqvWenXJH4XtknKk0-AVNi0SDpXuKg1Tdn6-fW57M6aq4OD-grqm49a5fHgetobUGxGeRHcA77zZFSF3fa9pUjC-jw2wnn7kHYQQkUT0fP8MsvFG5wpBVxd8Hf7dxCJMSU1UZCgGdGd0qY79faErowPFXIxYHJLc6AzBioSAllgT4SMZeeqTkJG_jWJ77hVzWNe1HEBf_YORzwtwMuik0sYQQNG-WAhVnsH2UQHFrmDPbKXzH3ZUJFY1IqtFCK8sEooEHY5M" 
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-sm font-bold text-xs flex items-center gap-2 hover:bg-secondary transition-all tracking-widest uppercase">
                  <span className="material-symbols-outlined text-sm">map</span>
                  View on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}