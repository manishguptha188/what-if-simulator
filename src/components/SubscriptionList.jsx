import SubscriptionItem from './SubscriptionItem'

function SubscriptionList({ subscriptions, onToggleSimulate, onDelete }) {
  if (subscriptions.length === 0) {
  return (
    <div className="empty-state">
      <p>No subscriptions found matching your current filter.</p>
    </div>
  )
}
    return(

        <ul>
      {subscriptions.map((sub) => (
        <SubscriptionItem
            key={sub.id}
            subscription={sub}
            onToggleSimulate={onToggleSimulate}
            onDelete={onDelete}
            />
      ))} 


    </ul>

    )
}

export default SubscriptionList;