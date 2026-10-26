function SubscriptionItem({ subscription }) {
  // 1. Calculation Zone (above return)
  const monthlyCost =
    subscription.billingCycle === "yearly"
      ? Math.round(subscription.cost / 12)
      : subscription.cost;

  // 2. Display Zone (inside return)
  return (
    <li>
      <h3>Name: {subscription.name}</h3>
      <p>Cost: ₹{subscription.cost} / {subscription.billingCycle}</p>
      {subscription.billingCycle === "yearly" && (
        <p>(Equivalent to ₹{monthlyCost}/month)</p>
      )}
      <p>Category: {subscription.category} | Usage: {subscription.usage}</p>
      <p>Status: {subscription.simulateCancel ? "Marked to Cancel" : "Active"}</p>
    </li>
  );
}

export default SubscriptionItem;