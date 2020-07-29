import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaletteContainer from './pages/Example/containers/PaletteContainer';
import CounterContainer from './pages/Example/containers/CounterContainer';
import WaitingListContainer from './pages/Example/containers/WaitingListContainer';

function App() {
  return (
    <div className="App">
        <PaletteContainer/>
        <CounterContainer/>
        <WaitingListContainer/>
    </div>
  );
}

export default App;
