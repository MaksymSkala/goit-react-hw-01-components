import React from 'react';
import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import data from '../data.json';
import FriendList from './FriendList';
import friendsData from '../friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';
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