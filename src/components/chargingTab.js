import React from 'react';


import "@fontsource/readex-pro";
import "@fontsource/inter";
import "@fontsource/roboto";
import '@fontsource-variable/noto-sans-tc';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import TimeSlider from './timeSlider';
import timeIcon from '../static/timeIcon.png'; // Importing the image


const ChargingTab = ({ selectedHour, setSelectedHour, hourlyCost }) => {

  return (
    <div style={styles.chargingContainer}>
        <div style={styles.chargingTimeRow}>
            <div style={styles.chargingLeft}>
                <img src={timeIcon} style={styles.chargingSymbol} />
                <span style={styles.chargingText}>Charging Time</span>
            </div>
        </div>
        <div style={styles.chargingRow}>
            <div style={styles.chargingTimeBox}>
                <TimeSlider selectedHour={selectedHour} setSelectedHour={setSelectedHour} hourlyCost={hourlyCost} />
            </div>
        </div>
    </div>
  );
};

const styles = {
    chargingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: '24px'
    },
    chargingTimeRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px', // Space between the icons/text row and the input box
    },
    chargingRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px', // Space between the icons/text row and the input box
    },
    chargingLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    chargingSymbol: {
        width: '28px',
        height: '28px',
        marginRight: '16px',
    },
    chargingTimeBox: {
        backgroundColor: '#ffffff',
        borderRadius: '20px', // Adjust the value as needed for the desired roundness
        width: '100%', // Adjust as needed
        height: '120px', // Adjust as needed
        padding: '16px', // Optional: If you want some space inside the box
        boxShadow: '4px 4px 6px  rgba(0,0,0,0.2)',
    },
    chargingText: {
        fontFamily: "'Noto Sans TC Variable', sans-serif",
        fontWeight: '500',  
        fontSize: '24px',
        
    },
    
};

export default ChargingTab;
