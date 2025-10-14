// src/components/model/HowItWorksSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      numberBg: 'bg-primary',
      title: 'Group Formation and Onboarding',
      description: 'Market Credit Partners (MCPs) form groups of 10-20 nano-business owners. Each member provides basic KYC-like information (photo, NIN, business details).',
      keyFeature: 'Key Feature: Market Leaders verify groups via digital signature or OTP, earning ₦1,000 reward automatically.',
    },
    {
      number: 2,
      numberBg: 'bg-accent',
      title: 'Verification & Assessment',
      description: 'Automated voicecall calls members in their local language to verify identity and intent. Failed verifications are escalated to human agents for review.',
      keyFeature: 'Efficiency: Voice automation saves 68-76% manual effort while ensuring compliance.',
    },
    {
      number: 3,
      numberBg: 'bg-neutral',
      title: 'Loan Disbursement',
      description: 'Approved loans are sent directly to each borrower\'s bank account. Members receive SMS and voice notifications in their language with repayment schedule.',
      keyFeature: 'Each member also contributes to a Loan Security Reserve (LSR) that protects the group from defaults.',
    },
    {
      number: 4,
      numberBg: 'bg-primary',
      title: 'Daily Repayment',
      description: 'Members make daily repayments to their Group Lead, who remits to the MCP. The MCP logs the total via app or USSD, and the system auto-distributes to individual member wallets.',
      keyFeature: 'Real-Time Tracking: MCPs can view wallet balances via dashboard or WhatsApp bot for instant transparency.',
    },
    {
      number: 5,
      numberBg: 'bg-accent',
      title: 'Behavioral Risk Management',
      description: 'The system monitors payment behavior and applies accountability measures to maintain group trust.',
      keyFeature: 'Digital Approval: Group Lead and Assistant approve via USSD or app—no paper forms required. Full audit trail maintained.',
    },
    {
      number: 6,
      numberBg: 'bg-primary',
      title: 'Loan Renewal',
      description: 'Members can request loan renewals through their Group Lead. The system automatically checks eligibility based on payment history, LSR balance, and behavior score.',
      keyFeature: 'Efficiency: Voice automation at re-repayment → 82-96% accountability fee charged to all members\n5 missed daily repayments → 2-month group suspension\n4 consecutive cycles of 1 member → member graduation with ensuring compliance.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral">
            How it works
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-12 h-12 ${step.numberBg} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 ml-16">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {step.keyFeature}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}