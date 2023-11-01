import './App.css';
import Header from './components/Header'; 
import LocationTab from './components/locationTab'; 
import ChargingTab from './components/chargingTab'; 
import PaymentTab from './components/paymentTab'; 
import InlineCartPage from './components/InlineCartPage.js';

import { useLocation, LocationContext } from './components/locationContext';
import React, { useContext } from 'react';



function App() {
  const { hasInput } = useContext(LocationContext);

  
  return (
    <div className="App" style={{ backgroundColor: '#67DF7C', height: '100%' }}> 
      <header>
        <Header />
      </header>
      {/* <div className='mainContainer'> */}

      <div className="belowLogo">
        <LocationTab />
        <div className={`belowLocation ${hasInput ? '' : 'belowLocation-blurred'}`}>
          <ChargingTab />
          <div className="belowTime">
            <PaymentTab />
          </div>
        </div>
      </div>
      <div className="footer" />      
        
      {/* </div> */}
      
    </div>
  );
}


export default App;
