import React, { useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import BillingPage from './components/BillingPage/BillingPage';
import SubscriptionPage from './components/SubscriptionPage/SubscriptionPage';

// style
import colors from './styles/colors';


export default ({ history }) => {
  useEffect(() => {
    document.body.style.backgroundColor = colors.primaryBlue;
  })

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/subscriptions/billing" component={BillingPage} />
          <Route path="/subscriptions" component={SubscriptionPage} />
        </Switch>
      </Router>
    </div>
  )
}
