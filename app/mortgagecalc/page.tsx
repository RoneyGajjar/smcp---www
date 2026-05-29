"use client";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';

const MortgageCalculator = () => {
  // State for inputs
  const [loanAmount, setLoanAmount] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Constants for remaining additional costs
  const propertyTaxesMonthly = 342;

  // Calculated values
  const [monthlyPI, setMonthlyPI] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, downPayment, interestRate, loanTerm]);

  const calculateMortgage = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let pi = 0;
    if (principal <= 0) {
        pi = 0;
    } else if (monthlyRate === 0) {
      pi = principal / numberOfPayments;
    } else {
      pi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    setMonthlyPI(pi);
    // Total is now just P&I + Property Taxes
    setTotalPayment(pi + propertyTaxesMonthly);
  };

  const handlePercentChange = (val:any) => {
    const percent = parseFloat(val) || 0;
    setDownPaymentPercent(percent);
    setDownPayment((percent / 100) * loanAmount);
  };

  const handleAmountChange = (val:any) => {
    const amount = parseFloat(val) || 0;
    setDownPayment(amount);
    if (loanAmount > 0) {
        setDownPaymentPercent((amount / loanAmount) * 100);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body antialiased">
      
      <main className="min-h-screen bg-surface">
        <header className="pt-16 pb-12 px-12 max-w-screen-2xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Institutional Grade Tools</span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-6">
              Mortgage Calculator
            </h1>
          </div>
        </header>

        <section className="px-12 pb-24 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Panel */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-surface-container-low rounded-xl p-8 space-y-8">
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-primary">Loan Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                    <input 
                      type="number"
                      className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary py-4 pl-10 pr-4 rounded-lg text-lg font-semibold"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-primary">Down Payment</label>
                    <input 
                      type="number"
                      className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 py-4 px-4 rounded-lg font-semibold"
                      value={downPayment}
                      onChange={(e) => handleAmountChange(e.target.value)}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-primary">Percentage (%)</label>
                    <input 
                      type="number"
                      className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 py-4 px-4 rounded-lg font-semibold"
                      value={downPaymentPercent.toFixed(1)}
                      onChange={(e) => handlePercentChange(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-primary">Interest Rate (%)</label>
                    <input 
                      type="number"
                      step="0.1"
                      className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 py-4 px-4 rounded-lg font-semibold"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-primary">Loan Term</label>
                    <select 
                      className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 py-4 px-4 rounded-lg font-semibold"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                    >
                      <option value={30}>30 Years Fixed</option>
                      <option value={20}>20 Years Fixed</option>
                      <option value={15}>15 Years Fixed</option>
                      <option value={10}>10 Years Fixed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-10 border border-outline-variant/10 shadow-sm h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h2 className="font-headline font-bold text-primary text-2xl mb-1">Your Monthly Estimate</h2>
                    <p className="text-on-surface-variant text-sm">Institutional forecast excluding insurance</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-1">
                      ${Math.round(totalPayment).toLocaleString()}
                    </div>
                    <span className="text-secondary font-bold text-sm">/ MONTH</span>
                  </div>
                </div>

                <div className="space-y-6 max-w-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-on-surface-variant font-medium">Principal & Interest</span>
                      </div>
                      <span className="text-primary font-bold">${Math.round(monthlyPI).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <span className="text-on-surface-variant font-medium">Property Taxes</span>
                      </div>
                      <span className="text-primary font-bold">${propertyTaxesMonthly}</span>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-outline-variant/30">
                      <div className="p-4 bg-surface-container-low rounded-lg mb-4 text-xs text-on-surface-variant">
                        <strong>Note:</strong> Estimates are based on current market data and exclude HOA or private mortgage insurance (PMI).
                      </div>
                      <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-lg hover:opacity-90 active:scale-[0.98] transition-all">
                        Get Pre-Approved Now
                      </button>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MortgageCalculator;