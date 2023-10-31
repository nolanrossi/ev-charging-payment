import './App.css';
import Header from './components/Header'; // Adjust the path if needed
import LocationTab from './components/locationTab'; // Adjust the path if needed
import ChargingTab from './components/chargingTab'; // Adjust the path if needed
import PaymentTab from './components/paymentTab'; // Adjust the path if needed
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
