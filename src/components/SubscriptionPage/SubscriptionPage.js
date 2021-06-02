import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { fetchSubscriptions } from '../../api/subscriptions';
import SubscriptionCard from '../SubscriptionCard/SubscriptionCard';
import SubscriptionTable from '../SubscriptionTable/SubscriptionTable';

// styles
import s from './style';
import c from '../../styles/common';

const BILLING_ROUTE = '/subscriptions/billing'

const SubscriptionPage = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)

  const history = useHistory();

  useEffect(() => {
    fetchSubscriptions().then(data => {
      if (data) {
        const { subscriptions, headings } = data
        setSubscriptionPlans(subscriptions);
        setHeadings(headings);
        subscriptions.forEach((sub) => {
          sub.featured && setActiveIndex(sub.index)
        })
      }
    });
  }, [])

  const renderRows = () => {
    let rows = [];
    subscriptionPlans.forEach((plan) => {
      let row = [];
      row.push(plan.displayName);
      plan.displayFeatures.forEach((feature) => {
        row.push(feature.value);
      })
      rows.push(row);
    })

    return rows;
  }

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  const handleSelect = () => {
    history.push(BILLING_ROUTE)
  }

  return (
    <div style={c.pageContainer}>
      <div style={c.imageContainer}>
        <img style={c.logoImage} src={`${process.env.REACT_APP_AWS_S3_IMAGES_URL}/img/udroppy-logo_white.png`} />
      </div>
      <div style={c.descriptionContainer}>
        <span>
          <b>Try uDroppy for free for 7 days</b>
          <br />
          Try a plan for free today and start adding high converting products from China, US and Europe to your store.
        </span>
      </div>
      <div style={s.cardContainer}>
        {
          subscriptionPlans?.map((plan, key) => (
            <SubscriptionCard
              key={key}
              plan={plan}
              handleClick={handleClick}
              handleSelect={handleSelect}
              featured={plan.index === activeIndex}
            />
          ))
        }
      </div>
      <SubscriptionTable
        headings={headings}
        rows={renderRows()}
        handleClick={handleClick}
        activeIndex={activeIndex}
      />
    </div>
  );
}

export default SubscriptionPage
