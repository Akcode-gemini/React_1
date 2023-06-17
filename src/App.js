import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Table from './components/Table';
function App() {
  return (
    <>
      <div className="container colo border border-secondary text-center">
        <Header />
        <Counter />
        <Table />
      </div>
    </>
  );
}

export default App;
