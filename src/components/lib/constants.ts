// src/lib/constants.ts
import { NavLink, SolutionFeature, Stat } from '../types/index';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Model', href: '/model' },
  { label: 'Contact', href: '/contact' },
];

export const SOLUTION_FEATURES: SolutionFeature[] = [
  {
    title: 'Built on trust and community bonds',
    description: 'We leverage existing social networks and trust structures within communities to create a foundation of mutual accountability and support.',
  },
  {
    title: 'Repaid in small, daily amounts that fit real incomes',
    description: 'Our flexible repayment model aligns with the actual cash flow of nano-businesses, making credit accessible and manageable.',
  },
  {
    title: 'Designed for growth—with loan upgrades as businesses succeed',
    description: 'As businesses demonstrate success, we grow with them, offering increasing credit limits and additional financial tools.',
  },
];

export const IMPACT_STATS: Stat[] = [
  { value: '₦8M+', label: 'Total Disbursed' },
  { value: '59', label: 'Businesses Supported' },
  { value: '98%', label: 'Repayment Rate' },
  { value: '100%', label: 'Community Trust' },
];

export const HERO_TEXT = {
  headline: 'Unlocking Credit. Powering Possibilities.',
  subtitle: 'Empowering Nigeria\'s nano-businesses with accessible, trust-based financing that works the way people live.',
};

export const PROBLEM_TEXT = {
  title: 'Excluded but not Invisible.',
  description: 'Over 32 million nano-businesses in Nigeria are locked out of traditional banking. They work hard, they have potential, but the system wasn\'t built for them. We\'re changing that.',
};

export const SOLUTION_TEXT = {
  title: 'Finance That Works the Way People Live.',
  description: 'Our approach is simple: meet people where they are with credit that fits their reality.',
};

export const IMPACT_TEXT = {
  title: 'Proof That It Works.',
  description: 'Real businesses. Real impact. Real results.',
};

export const PROMISE_TEXT = {
  title: 'Àlàáfíà Means Peace and Wellbeing.',
  description: 'We believe financial access is a pathway to peace of mind and community prosperity. Every loan we make is a step toward a more inclusive economy where hard work is rewarded and potential is unleashed.',
};

export const FOOTER_TEXT = {
  tagline: 'Empowering communities through accessible finance.',
  copyright: '© 2025 Àlàáfíà. All rights reserved.',
};





export const ABOUT_CONTENT = {
  hero: {
    title: 'Lighting up possibilities in overlooked places',
    description1: 'Alaafia is a fintech company unlocking credit for Nigeria\'s most underserved nano-businesses — street traders, market women, artisans, and smallholder farmers — who are excluded from traditional finance.',
    description2: 'We believe financial inclusion isn\'t about charity. It\'s about trust, dignity, and opportunity. Every day, over 32 million hardworking nano-business traders are forced to run on tiny margins, not because they lack ambition, but because the financial system wasn\'t designed for them. Alaafia is changing that.',
  },
  vision: {
    title: 'Our Vision',
    description: 'At Alaafia, we\'ve reimagined credit for the realities of everyday life. Our unique approach blends trust, culture, and technology into a Triple Layer Trust (TLT) system.',
  },
  mission: {
    title: 'Our Mission',
    description: 'To unlock the hidden wealth of underserved people and places by providing fast, fair, and flexible credit built on trust, culture, and technology.',
  },
};