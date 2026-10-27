import { useState } from 'react'
import './App.css'
import initialSubscriptions from './data/initialSubscriptions'
import SubscriptionList from './components/SubscriptionList'
import SavingsDashboard from './components/SavingsDashboard'



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

  return (
    <>
      <h1>"What If?" Subscription & Impulse-Buy Simulator</h1>
      <SavingsDashboard subscriptions={subscriptions} />
      <SubscriptionList
        subscriptions={subscriptions}
        onToggleSimulate={handleToggleSimulate}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App