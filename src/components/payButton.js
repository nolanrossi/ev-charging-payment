import React from 'react';
import "@fontsource/readex-pro";


const PayButton = () => {
  return (
    <div style={styles.payButtonOuter}>
        Pay
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
        background: 'linear-gradient(90deg, #70ee9b, #59c13c)'


    },


};

export default PayButton;
