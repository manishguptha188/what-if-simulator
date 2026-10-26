const initialSubscriptions = [
  {
    id: 1,
    name: "Netflix",
    cost: 649,
    billingCycle: "monthly",
    category: "Entertainment",
    usage: "Daily",
    simulateCancel: false,
  },

  {
    id: 2,
    name: "Spotify",
    cost: 139,
    billingCycle: "yearly",
    category: "Entertainment",
    usage: "Daily",
    simulateCancel: false,

  },

  {
    id: 3,
    name: "Adobe Creative Cloud",
    cost: 5999,
    billingCycle: "yearly",
    category: "Productivity",
    usage: "Daily",
    simulateCancel: false,

  },

  {
    id: 4,
    name: "Gemini",
    cost: 1999,
    billingCycle: "monthly",
    category: "Finance",
    usage: "Rarely",
    simulateCancel: true,
  },

  {
    id: 5,
    name: "Duolingo",
    cost: 499,    
    billingCycle: "monthly",
    category: "Education",
    usage: "Rarely",
    simulateCancel: true,
  }
  
  

];

export default initialSubscriptions;