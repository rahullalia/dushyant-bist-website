export const CONTACT = {
  name: "Dushyant Bist",
  firstName: "Dushyant",
  lastName: "Bist",
  title: "NY Mortgage Loan Officer",
  phone: "(917) 200-4124",
  phoneRaw: "9172004124",
  instagram: "https://www.instagram.com/poweredbydbest/",
  instagramHandle: "@poweredbydbest",
  smsMessage: "Hi Dushyant! I found you online and I'm interested in learning more about mortgage options.",
} as const;

export const LOAN_TYPES = [
  { name: "Conventional", description: "Traditional financing with competitive rates" },
  { name: "FHA", description: "Low down payment options for first-time buyers" },
  { name: "VA", description: "Zero down payment for veterans and active military" },
  { name: "Jumbo", description: "Financing for high-value properties" },
  { name: "Non-QM", description: "Flexible options for self-employed and unique situations" },
  { name: "DSCR", description: "Investment property loans based on rental income" },
  { name: "Mixed-Use", description: "Commercial and residential property financing" },
  { name: "Multifamily", description: "Apartment buildings and multi-unit properties" },
  { name: "Fix-and-Flip", description: "Short-term financing for property investors" },
  { name: "Bridge Loans", description: "Fast funding to close deals quickly" },
] as const;

export const ABOUT_TEXT = `As a New York State Mortgage Loan Officer, I help people make smart moves with their money—whether they're buying a home, investing in property, or need fast funding to get a deal done. I work with residential, commercial, and hard money loans, and break everything down in plain language. My goal: finding the right solution and helping you close with confidence.`;
