// src/App.js

import React from 'react';
import { processData } from './dataProcessor';
import CategoryChart from './CategoryChart';
import SourceIPChart from './SourceIPChart';
import DestinationPortChart from './DestinationPortChart';
import './App.css';

const { alertsByCategory, alertsBySourceIP, alertsByDestinationPort } = processData();

function App() {
  return (
    <div className="App">
      <h1>Security Alert Dashboard</h1>
      <div className="charts-container">
        <CategoryChart data={alertsByCategory} />
        <SourceIPChart data={alertsBySourceIP} />
        <DestinationPortChart data={alertsByDestinationPort} />
      </div>
    </div>
  );
}

export default App;
