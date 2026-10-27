import { useState } from 'react'
import './App.css'
import initialSubscriptions from './data/initialSubscriptions'
import SubscriptionList from './components/SubscriptionList'
import SavingsDashboard from './components/SavingsDashboard'
import SubscriptionForm from './components/SubscriptionForm'
import FilterControls from './components/FilterControls'



function App() {
  
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRarelyUsedOnly, setShowRarelyUsedOnly] = useState(false);
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


const handleResetSimulation = () => {
  const reset = subscriptions.map((sub) => ({
    ...sub,
    simulateCancel: false,
  }));

  setSubscriptions(reset);
};
const filteredSubscriptions = subscriptions.filter((sub) => {
  const matchesCategory =
    selectedCategory === 'All' || sub.category === selectedCategory;

  const matchesUsage =
    !showRarelyUsedOnly || sub.usage === 'Rarely';

  return matchesCategory && matchesUsage;
});

   

  
  
   

  return (
    <div className="app-container">
      <h1>"What If?" Subscription & Impulse-Buy Simulator</h1>
      <SavingsDashboard subscriptions={subscriptions} />
      <SubscriptionForm onAdd={handleAddSubscription} />
      <FilterControls
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        showRarelyUsedOnly={showRarelyUsedOnly}
        onToggleRarelyUsed={setShowRarelyUsedOnly}
        onResetSimulation={handleResetSimulation}
      />
      <SubscriptionList
        subscriptions={filteredSubscriptions}
        onToggleSimulate={handleToggleSimulate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App