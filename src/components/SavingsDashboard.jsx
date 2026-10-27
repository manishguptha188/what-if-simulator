import { useState } from 'react'


function SavingsDashboard({ subscriptions }) {
const [goalName, setGoalName] = useState('Sony Headphones')
const [goalPrice, setGoalPrice] = useState(18000)
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

const numericGoalPrice = Number(goalPrice)

const monthsToGoal =
  monthlySavings > 0 && numericGoalPrice > 0
    ? Math.ceil(numericGoalPrice / monthlySavings)
    : null

const isAffordableInOneYear =
  monthlySavings > 0 && oneYearSavings >= numericGoalPrice

  return (
    <div className="dashboard-card">
      <h2>Spending & What-If Savings Dashboard</h2>

      <div className="stat-box">
              <div className="stat-box">
        <div className="stat-label">Total Monthly Spend</div>
        <div className="stat-value">₹{totalMonthlySpend} / month</div>
      </div>  
        <p>Equivalent Annual Spend: ₹{yearlySpend} / year</p>
        <p>Monthly Savings: ₹{monthlySavings} / month</p>
        <p>1-Year Savings: ₹{oneYearSavings}</p>
        <p>3-Year Savings: ₹{threeYearSavings}</p>
        <p>5-Year Savings: ₹{fiveYearSavings}</p>
      </div>
      {/* We'll display the numbers here */}
      <h3>🎯 Impulse-Buy Goal Tracker</h3>
      <div className="goal-inputs">

  <label>
    Goal Item:{' '}
    <input
      type="text"
      value={goalName}
      onChange={(e) => setGoalName(e.target.value)}
      placeholder="e.g. Gaming Monitor"
    />
  </label>

  <label style={{ marginLeft: '10px' }}>
    Price (₹):{' '}
    <input
      type="number"
      value={goalPrice}
      onChange={(e) => setGoalPrice(e.target.value)}
      placeholder="e.g. 15000"
    />
  </label>
</div>

<div className="goal-tracker">
{monthlySavings === 0 && (
  <p>
    💡 Check "Simulate Cancel" on subscriptions below to see when you could afford this goal!
  </p>
)}

{monthsToGoal !== null && (
  <p>
    With your simulated savings, you can afford{" "}
    <strong>{goalName || "your goal"}</strong> in approximately{" "}
    <strong>{monthsToGoal} month(s)</strong>!
  </p>
)}

{isAffordableInOneYear && (
  <p>
    🎉 You can fully afford this within your 1st year of cancellations!
  </p>
)}
</div>
    </div>
    
  )
}

export default SavingsDashboard