import { getSubscriptionsMock } from "../mocks/getMocks";

export const fetchSubscriptions = async () => {
    return await getSubscriptionsMock().then(res => res.data);
    //await fetch(`${process.env.REACT_APP_API_ENDPOINT}/subscriptions/plans`).then((res) => res.data)
}