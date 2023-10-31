import React, { useState } from 'react';

// Import your icons here
// import locationIcon from './path-to-location-icon.svg';
// import infoIcon from './path-to-info-icon.svg';
import "@fontsource/readex-pro";
import "@fontsource/inter";
import '@fontsource-variable/noto-sans-tc';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import locationIcon from '../static/locationIcon.png'; // Importing the image
import infoIcon from '../static/infoIcon.png'; // Importing the image


import { useLocation } from './locationContext';



const LocationTab = () => {
    const { hasInput, setHasInput } = useLocation();
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = React.useRef(null);  // Create a ref for the input element

    const handleInputChange = (e) => {
        setHasInput(e.target.value !== "");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();  // Prevents the default form submission behavior
            inputRef.current.blur();  // Blurs the input field to remove focus
        }
    };
    

  return (
    <div style={styles.locationContainer}>
        <div style={styles.locationRow}>
            <div style={styles.locationLeft}>
                <img src={locationIcon} style={styles.locationSymbol} />

                <span style={styles.locationText}>Location</span>
            </div>
            <img src={infoIcon} style={styles.infoSymbol} />

        </div>
        <div style={styles.locationInputRow}>
            <input 
                ref={inputRef}  // Set the ref property to inputRef
                style={isFocused ? styles.focusedLocationInput : styles.locationInput} 
                placeholder="Type location code" 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}  // Set the onKeyDown prop to handleKeyDown
            />
        </div>
    </div>
  );
};

const styles = {
    locationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: '24px'
    },
    locationRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px', // Space between the icons/text row and the input box
    },
    locationInputRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4px', // Space between the icons/text row and the input box
    },
    locationLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    locationSymbol: {
        width: '28px',
        height: '28px',
        marginRight: '16px',
    },
    locationText: {
        fontFamily: "'Noto Sans TC Variable', sans-serif",
        fontWeight: '500',  
        fontSize: '24px',
    },
    infoSymbol: {
        width: '24px',
        height: '24px',
    },
    locationInput: {
        width: '100%',
        padding: '8px',
        border: '2px solid #ffffff',
        borderRadius: '12px',
        boxShadow: '4px 4px 6px  rgba(0,0,0,0.2)',
        paddingLeft: '12px',

        
        
      },
    focusedLocationInput: {
        width: '100%',
        padding: '8px',
        border: '2px solid #70ee9b', // Color when focused
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        paddingLeft: '12px',

        outline: 'none', // This will remove the default browser focus outline
    }
};

export default LocationTab;
