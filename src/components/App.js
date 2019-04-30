import React from 'react';
import UserCard from './UserCard/UserCard';
import Stats from './Stats/Stats';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import stats from '../stats.json';
import pricingPlan from '../pricingPlan.json';
import transactions from '../transactions.json';

const App = () => (
  <div>
    <UserCard {...user} />
    <hr />
    <Stats title="UPLOAD STATS" items={stats} />
    <hr />
    <PricingPlan items={pricingPlan} />
    <hr />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
