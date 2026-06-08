"use client"
// src/components/organisms/LoanScenarioModal.tsx
import React, { useState } from 'react';
// import { supabase } from '@/services/supabaseClient';
import { Button } from './ui/button';                  // Points to components/ui/button.tsx
import { Modal } from './modal';                        // Points to components/modal.tsx
import { createClient } from '@/lib/supabase';

// Note: If you don't have a custom FormField combo component yet, 
// you can build it on the fly using your UI components:

type Step = 'selection' | 'checking_auth' | 'login_prompt' | 'unapproved_notice' | 'form';
type Role = 'client' | 'partner' | null;

interface LoanScenarioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoanScenarioModal: React.FC<LoanScenarioModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<Step>('selection');
    const [role, setRole] = useState<Role>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const supabase = createClient();

    // Reset state when modal closes
    const handleClose = () => {
        setStep('selection');
        setRole(null);
        onClose();
    };

    const handleClientSelect = () => {
        setRole('client');
        setStep('form');
    };

    const handlePartnerSelect = async () => {
        setRole('partner');
        setStep('checking_auth');

        try {
            // 1. Check if logged in
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                setStep('login_prompt');
                return;
            }

            // 2. Check partner approval status
            const { data: partnerData, error } = await supabase
                .from('partners')
                .select('status')
                .eq('user_id', session.user.id)
                .single();

            if (error || !partnerData) throw new Error('Partner record not found');

            if (partnerData.status === 'Approved') {
                setStep('form');
            } else {
                setStep('unapproved_notice');
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            setStep('login_prompt');
        }
    };

    const handleScenarioSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // TODO: Insert scenario data into Supabase 'scenarios' or 'loans' table
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Scenario submitted successfully!");
            handleClose();
        }, 1000);
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Submit a Loan Scenario">

            {/* STEP 1: Role Selection */}
            {step === 'selection' && (
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                    <Button variant="outline" className="flex-1 py-8 text-lg" onClick={handleClientSelect}>
                        I am a Client
                    </Button>
                    <Button variant="default" className="flex-1 py-8 text-lg" onClick={handlePartnerSelect}>
                        I am a Partner
                    </Button>
                </div>
            )}

            {/* STEP 2: Loading State for Partner Auth */}
            {step === 'checking_auth' && (
                <div className="text-center py-8 text-gray-600">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
                    Verifying partner credentials...
                </div>
            )}

            {/* STEP 3A: Partner Not Logged In */}
            {step === 'login_prompt' && (
                <div className="text-center py-4">
                    <p className="text-gray-700 mb-6">You must be logged into an approved partner account to submit scenarios on behalf of clients.</p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" onClick={() => setStep('selection')}>Back</Button>
                        {/* In a real app, this would route to your /login page or open a login component */}
                        <Button onClick={() => alert('Redirect to Login Page')}>Go to Login</Button>
                    </div>
                </div>
            )}

            {/* STEP 3B: Partner Not Approved Yet */}
            {step === 'unapproved_notice' && (
                <div className="text-center py-4">
                    <div className="bg-yellow-50 text-yellow-800 p-4 rounded-md mb-6">
                        Your partner application is currently pending review. You will be able to submit scenarios once an admin approves your account.
                    </div>
                    <Button variant="outline" onClick={handleClose}>Close</Button>
                </div>
            )}

            {/* STEP 4: The Scenario Submission Form */}
            {step === 'form' && (
                <form onSubmit={handleScenarioSubmit} className="space-y-4">
                    <div className="bg-brand-light text-brand-dark px-4 py-2 rounded-md text-sm font-semibold mb-4 inline-block">
                        Submitting as: {role === 'client' ? 'Direct Client' : 'Approved Partner'}
                    </div>

                    <input
                        // label="Client Name" 
                        id="scenario_name"
                        required
                        placeholder="John Doe"
                    />
                    <input
                        // label="Estimated Loan Amount" 
                        id="scenario_amount"
                        type="number"
                        required
                        placeholder="$500,000"
                    />
                    <input
                        // label="Scenario Description"
                        id="scenario_desc"
                        required
                        placeholder="Briefly describe the property and loan requirement..."
                    />

                    <div className="mt-8 flex justify-between pt-4 border-t border-gray-200">
                        <Button type="button" variant="outline" onClick={() => setStep('selection')}>Change Role</Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Scenario'}
                        </Button>
                    </div>
                </form>
            )}

        </Modal>
    );
};