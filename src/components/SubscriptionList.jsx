import SubscriptionItem from './SubscriptionItem'

function SubscriptionList({ subscriptions }) {

    return(

        <ul>
      {subscriptions.map((sub) => (
        <SubscriptionItem key={sub.id} subscription={sub} />
      ))} 


    </ul>

    )
}

export default SubscriptionList;