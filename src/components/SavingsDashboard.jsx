function SavingsDashboard({ subscriptions }) {

  // We'll calculate the numbers here
      const getMonthlyCost = (sub) =>
      sub.billingCycle === "yearly"
        ? Math.round(sub.cost / 12)
        : sub.cost

    
const totalMonthlySpend = subscriptions.reduce(
  (sum, sub) => sum + getMonthlyCost(sub),
  0
 
)
const yearlySpend = totalMonthlySpend * 12

const monthlySavings = subscriptions
  .filter((sub) => sub.simulateCancel)
  .reduce((sum, sub) => sum + getMonthlyCost(sub), 0)

const oneYearSavings = monthlySavings * 12
const threeYearSavings = monthlySavings * 36
const fiveYearSavings = monthlySavings * 60

  return (
    <div>
      <h2>Spending & What-If Savings Dashboard</h2>
        <p>Total Monthly Spend: ₹{totalMonthlySpend}</p>
        <p>Equivalent Annual Spend: ₹{yearlySpend} / year</p>
        <p>Monthly Savings: ₹{monthlySavings} / month</p>
        <p>1-Year Savings: ₹{oneYearSavings}</p>
        <p>3-Year Savings: ₹{threeYearSavings}</p>
        <p>5-Year Savings: ₹{fiveYearSavings}</p>
      {/* We'll display the numbers here */}
    </div>
  )
}

export default SavingsDashboard