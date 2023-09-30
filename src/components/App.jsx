import React from 'react';
import Profile from '../components/Profile'; // Правильний шлях до компонента Profile
import Statistics from '../components/Statistics'; // Правильний шлях до компонента Statistics
import data from '../data.json'; // Правильний шлях до data.json
import './styles.css';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;