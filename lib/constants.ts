export const CONTACT = {
  name: "Dushyant Bist",
  firstName: "Dushyant",
  lastName: "Bist",
  title: "Mortgage Loan Officer",
  subtitle: "New York State",
  phone: "(917) 200-4124",
  phoneRaw: "9172004124",
  email: "dushyant@poweredbydbest.com", // Placeholder - update when confirmed
  instagram: "https://www.instagram.com/poweredbydbest/",
  instagramHandle: "@poweredbydbest",
  website: "https://dushyant-rho.vercel.app",
  smsMessage: "Hi Dushyant! I found your website and would love to chat about mortgage options.",
  location: "New York State",
} as const;

export const LOAN_TYPES = [
  { name: "Conventional", description: "Competitive rates for qualified buyers" },
  { name: "FHA", description: "Low down payment, first-time buyer friendly" },
  { name: "VA", description: "Zero down for veterans and military" },
  { name: "Jumbo", description: "Financing for high-value homes" },
  { name: "Non-QM", description: "Flexible options for unique situations" },
  { name: "DSCR", description: "Investment loans based on rental income" },
  { name: "Mixed-Use", description: "Commercial and residential combined" },
  { name: "Multifamily", description: "Apartment and multi-unit properties" },
  { name: "Fix & Flip", description: "Short-term funding for investors" },
  { name: "Bridge", description: "Fast funding to close deals quickly" },
] as const;

export const ABOUT_TEXT = `I help people across New York make smart decisions with their money. Whether you're buying your first home, investing in property, or need quick funding to close a deal, I'll find the right loan for your situation. I work with residential, commercial, and hard money loans, and I keep things simple. No jargon, no runaround. Just honest advice and a smooth path to closing.`;

export const TAGLINE = "Your trusted partner for home loans in New York";

export const VALUE_PROPS = [
  "Clear communication, no surprises",
  "Fast pre-approvals",
  "Competitive rates",
  "Available 7 days a week",
] as const;

export const CREDENTIALS = {
  nmls: "[NMLS #]",
  yearsExperience: "5+",
  loansCompleted: "500+",
  rating: "4.9",
  reviewCount: "50+",
} as const;

export const STATS = [
  { value: "500+", label: "Loans Closed" },
  { value: "4.9", label: "Rating" },
  { value: "5+", label: "Years Experience" },
] as const;

export const TESTIMONIALS = [
  {
    text: "Dushyant made buying our first home so much easier than we expected. He explained everything clearly and got us a great rate. We closed in less than 30 days!",
    author: "Sarah M.",
    location: "Brooklyn, NY",
    type: "First-time Buyer",
    rating: 5,
  },
  {
    text: "I've worked with several loan officers over the years, but Dushyant is the best. He found me a DSCR loan for my investment property when others said it couldn't be done.",
    author: "Michael R.",
    location: "Queens, NY",
    type: "Real Estate Investor",
    rating: 5,
  },
  {
    text: "Fast, professional, and always available. Dushyant answered my calls even on weekends. I recommend him to everyone looking for a mortgage in New York.",
    author: "Jennifer L.",
    location: "Manhattan, NY",
    type: "Home Refinance",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What credit score do I need to buy a home?",
    answer: "Most conventional loans require a minimum score of 620, but FHA loans can go as low as 580 with 3.5% down. I work with many programs and can often find options even with lower scores.",
  },
  {
    question: "How much down payment do I need?",
    answer: "It depends on the loan type. Conventional loans typically require 3-20%, FHA requires 3.5%, and VA loans offer 0% down for eligible veterans. I'll help you find the best option for your situation.",
  },
  {
    question: "What's the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification is a quick estimate based on self-reported info. Pre-approval involves verifying your income, assets, and credit, giving you a concrete loan amount that sellers take seriously.",
  },
  {
    question: "How long does the mortgage process take?",
    answer: "Typically 30-45 days from application to closing. With all documents ready, I've closed loans in as little as 2 weeks. I'll guide you through each step to keep things moving.",
  },
  {
    question: "Do you work with first-time homebuyers?",
    answer: "Absolutely! First-time buyers are a big part of my business. I'll walk you through everything from pre-approval to closing, and help you find programs with low down payments and competitive rates.",
  },
  {
    question: "What areas of New York do you serve?",
    answer: "I'm licensed throughout New York State, so I can help whether you're buying in Manhattan, Brooklyn, Queens, Long Island, Westchester, or anywhere else in NY.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Free Consultation",
    description: "We discuss your goals and I explain your options",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Pre-Approval",
    description: "Get pre-approved in as little as 24 hours",
    icon: "FileCheck",
  },
  {
    step: 3,
    title: "Loan Selection",
    description: "I find the best rates and terms for you",
    icon: "Search",
  },
  {
    step: 4,
    title: "Application",
    description: "Simple paperwork, I handle the details",
    icon: "ClipboardList",
  },
  {
    step: 5,
    title: "Closing",
    description: "Keys in hand, congrats on your new home!",
    icon: "Key",
  },
] as const;
