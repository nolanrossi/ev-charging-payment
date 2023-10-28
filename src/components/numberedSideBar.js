import React from 'react';
import "@fontsource/readex-pro";


const NumberedSideBar = () => {
  return (
    <div style={styles.sideBarOuter}>
        <div style={styles.item1}>1</div >
        <div style={styles.item2}>2</div >
        <div style={styles.item3}>3</div >

    </div>
  );
};

const styles = {
    sideBarOuter: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'center',
        width: '60px',
        fontFamily: 'Readex Pro', // If you want to use the Readex Pro font for the button text
        fontSize: '32px', // Adjust as needed
        fontWeight: 'Bold',
        height: '100%',
        marginTop: '15px'

    },
    item1: {
        marginBottom: '100px'
    },
    item2: {
        marginBottom: '195px'
    },
    item3: {
        marginBottom: '290px'
    }


};

export default NumberedSideBar;
