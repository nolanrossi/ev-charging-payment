import React from 'react';
import "@fontsource/readex-pro";


const GooglePayButton = () => {
  return (
    <div style={styles.payButtonOuter}>
        Google Pay
    </div>
  );
};

const styles = {
    payButtonOuter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF', // This will make the text color white
        borderRadius: '8px', // This will round the edges of the button
        height: '60px',
        width: '100%',
        fontFamily: 'Readex Pro', // If you want to use the Readex Pro font for the button text
        fontSize: '20px', // Adjust as needed
        cursor: 'pointer', // This will change the cursor to a hand when hovering over the button
        fontWeight: 'Bold',
        marginTop: '12px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.5)',
        backgroundColor: undefined, // Remove the solid color
        background: 'black'


    },


};

export default GooglePayButton;
