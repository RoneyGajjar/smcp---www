import React from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { logout } from '@/app/login/action'

// Upgrade to an async Server Component
export default async function Navbar() {
  // 1. Fetch the secure session on the server
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <>
      <header className="bg-brand-dark border-b border-primary-container sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-9xl mx-auto h-24">
          <Link href="/">
            <div className="text-2xl font-black text-white tracking-tighter font-headline flex items-center gap-2 px-0 py-0">
              <img
                src="/stratmire_logo.png"
                alt="Stratmire Logo"
                className="w-70 object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex gap-4 items-center">
            <div className="hidden lg:flex items-center gap-8">
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/">Home</Link>
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/about">About Us</Link>
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/loanprogram">Loan Programs</Link>
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/partners">Become a Partner</Link>
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/mortgagecalc">Mortgage Calculator</Link>
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/business-services">Business Services</Link>
              <Link className="text-slate-300/80 hover:text-white transition-colors font-headline font-bold tracking-tight text-sm uppercase" href="/contact">Contact Us</Link>
            </div>
          </nav>

          {/* 2. Conditional Rendering based on Server-Side Auth State */}
          {user ? (
            <form action={logout}>
              <button
                type="submit"
                className="bg-white text-primary px-7 py-3 font-headline font-bold text-[13px] uppercase tracking-widest rounded-md hover:bg-opacity-90 transition-all shadow-md"
              >
                Log out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-white text-primary px-7 py-3 font-headline font-bold text-[13px] uppercase tracking-widest rounded-md hover:bg-opacity-90 transition-all shadow-md"
            >
              Account Login
            </Link>
          )}

        </div>
      </header>
    </>
  )
}