import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CryptoTable from './components/CryptoTable';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <header>
          <h1 style={{color:"white" , fontFamily:"monospace"}} >Cryptocurrency Price Tracker</h1>
         </header>
        <main>
          <CryptoTable />
        </main>
       
      </div>
    </Provider>
  );
}

export default App;