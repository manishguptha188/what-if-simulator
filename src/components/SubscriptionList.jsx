import SubscriptionItem from './SubscriptionItem'

function SubscriptionList({ subscriptions, onToggleSimulate, onDelete }) {

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