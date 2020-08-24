import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { GetFacts } from './facts/components/GetFact';

Storage.prototype.setObject = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = (key) => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
};

function App() {
  return (
    <div>
      <GetFacts></GetFacts>
    </div>
  );
}

export default App;
