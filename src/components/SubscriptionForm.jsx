import { useState } from 'react'

function SubscriptionForm({ onAdd }) {
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [category, setCategory] = useState("Entertainment");
    const [usage, setUsage] = useState("Daily");
    const handleSubmit = (e) => {
  e.preventDefault()

  if (!name.trim() || Number(cost) <= 0) {
    alert('Please enter a valid subscription name and cost.')
    return
  }

  onAdd({
    name,
    cost,
    billingCycle,
    category,
    usage,
  })

  setName('')
  setCost('')
  setBillingCycle('monthly')
  setCategory('Entertainment')
  setUsage('Daily')
}
   

  return (
    <form onSubmit={handleSubmit}>
        <button type="submit">Add Subscription</button>
      <h3>Add New Subscription</h3>
      <div>
  <label>
    Name:{' '}
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="e.g. YouTube Premium"
    />
    <div>
  <label>
    Cost (₹):{' '}
    <input
      type="number"
      value={cost}
      onChange={(e) => setCost(e.target.value)}
      placeholder="e.g. 149"
    />
  </label>
</div>
<div>
  <label>
    Billing Cycle:{' '}
    <select
      value={billingCycle}
      onChange={(e) => setBillingCycle(e.target.value)}
    >
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
  </label>
</div>
<div>
  <label>
    Category:{' '}
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="Entertainment">Entertainment</option>
      <option value="Productivity">Productivity</option>
      <option value="Fitness">Fitness</option>
      <option value="Education">Education</option>
      <option value="Finance">Finance</option>
      <option value="Other">Other</option>
    </select>
  </label>
</div>
<div>
  <label>
    Usage Level:{' '}
    <select
      value={usage}
      onChange={(e) => setUsage(e.target.value)}
    >
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Rarely">Rarely</option>
    </select>
  </label>
</div>
  </label>
</div>
    </form>
  )
}

export default SubscriptionForm