
function SavingsDashboard({ subscriptions }) {

    
}
const getMonthlyCost = (sub) =>
  sub.billingCycle === "yearly" ? Math.round(sub.cost / 12) : sub.cost;

const totalMonthlySpend = subscriptions.reduce(
  (sum, sub) => sum + getMonthlyCost(sub),
  0
);

const monthlySavings = subscriptions
  .filter((sub) => sub.simulateCancel)
  .reduce((sum, sub) => sum + getMonthlyCost(sub), 0);