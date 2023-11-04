import './App.css';
import Header from './components/Header'; 
import LocationTab from './components/locationTab'; 
import ChargingTab from './components/chargingTab'; 
import PaymentTab from './components/paymentTab'; 
import InlineCartPage from './components/InlineCartPage.js';

import { useLocation, LocationContext } from './components/locationContext';
import React, { useContext, useState} from 'react';



function App() {
  const { hasInput } = useContext(LocationContext);
  const [selectedHour, setSelectedHour] = useState(2);
  const [hourlyCost] = useState('12');

  
  return (

      <div className="App" style={{ backgroundColor: '#67DF7C', height: '100%' }}> 
        <header>
          <Header />
        </header>
        {/* <div className='mainContainer'> */}

        <div className="belowLogo">
          <LocationTab />
          <div className={`belowLocation ${hasInput ? '' : 'belowLocation-blurred'}`}>
            <ChargingTab selectedHour={selectedHour} setSelectedHour={setSelectedHour} hourlyCost={hourlyCost}/>
            <div className="belowTime">
              <PaymentTab selectedHour={selectedHour} hourlyCost={hourlyCost} />
            </div>
          </div>
        </div>
        <div className="footer" />      
          
        {/* </div> */}
        
      </div>

  );
}


export default App;
