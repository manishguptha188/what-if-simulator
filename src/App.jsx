import { useState } from 'react'
import './App.css'
import initialSubscriptions from './data/initialSubscriptions'
import SubscriptionList from './components/SubscriptionList'
import SavingsDashboard from './components/SavingsDashboard'
import SubscriptionForm from './components/SubscriptionForm'



function App() {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  console.log("Subscriptions in state:", subscriptions);

  const handleToggleSimulate = (id) => {
    const updated = subscriptions.map((sub) =>
      sub.id === id ? { ...sub, simulateCancel: !sub.simulateCancel } : sub
    );
    setSubscriptions(updated);
  };

  const handleDelete = (id) => {
    const updatedSubscriptions = subscriptions.filter(
      (sub) => sub.id !== id
    );
    setSubscriptions(updatedSubscriptions);
  };

const handleAddSubscription = (newSubData) => {
  const newSubscription = {
    ...newSubData,
    id: Date.now(),
    cost: Number(newSubData.cost),
    simulateCancel: false,
  };

  setSubscriptions(subscriptions.concat(newSubscription));
};

  return (
    <>
      <h1>"What If?" Subscription & Impulse-Buy Simulator</h1>
      <SavingsDashboard subscriptions={subscriptions} />
      <SubscriptionForm onAdd={handleAddSubscription} />
      <SubscriptionList
        subscriptions={subscriptions}
        onToggleSimulate={handleToggleSimulate}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App