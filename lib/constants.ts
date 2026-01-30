export const CONTACT = {
  name: "Dushyant Bist",
  firstName: "Dushyant",
  lastName: "Bist",
  title: "Mortgage Loan Officer",
  subtitle: "New York State",
  phone: "(917) 200-4124",
  phoneRaw: "9172004124",
  instagram: "https://www.instagram.com/poweredbydbest/",
  instagramHandle: "@poweredbydbest",
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
