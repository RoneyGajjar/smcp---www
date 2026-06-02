"use client";
import About from '@/components/about';
import Footer from '@/components/footer';
import Howitwork from '@/components/howitwork';
import Lenderbanner from '@/components/lenderbanner';
import Loanpartner from '@/components/loanpartner';
import Loanprogram from '@/components/loanprogram';
import Mainherov0 from '@/components/mainherov0';


export default function StratmireLanding() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">


      {/* Hero Section */}
      <Mainherov0 />

      {/* About Section */}
      <About />

      {/* Loan Programs Section */}
      <Loanprogram />

      {/* How it Works Section */}
      <Howitwork />

      {/* Become a Loan Partner Section */}
      <Loanpartner />

      {/* High-Contrast Lender Banner Section */}
      {/* <Lenderbanner /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}