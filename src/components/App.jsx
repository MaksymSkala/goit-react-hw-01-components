import React from 'react';
import Profile from './Profile';
import Statistics from './statistics/Statistics';
import data from '../data_json/data.json';
import FriendList from './friends/FriendList';
import friendsData from '../data_json/friends.json';
import TransactionHistory from './transaction/TransactionHistory';
import transactions from '../data_json/transactions.json';
import './styles.css';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" stats={data} />    
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
}

export default App;