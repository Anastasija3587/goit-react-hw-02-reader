import React from 'react';
import Reader from './Reader/Reader';
import items from '../db/publications.json';

const App = () => {
  return <Reader items={items} />;
};

export default App;
