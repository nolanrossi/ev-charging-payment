import React from 'react';
import "@fontsource/readex-pro";
// You can import your logo and icon here if you have them
// import logo from './path-to-your-logo.svg';
// import icon from './path-to-your-icon.svg';
import chargingIcon from '../static/chargingIcon.png'; // Importing the image


const Header = () => {
  return (
    <div style={styles.headerContainer}>
      {/* Replace the following div with an img tag if you have a logo */}
      <img src={chargingIcon} style={styles.logoImage} />
      <div style={styles.logo}>Logo</div>
      {/* Uncomment the next line if you have an icon */}
      {/* <img src={icon} alt="Icon" style={styles.icon} /> */}
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px' // Adjust as needed
  },
  logo: {
    fontSize: '32px', // Adjust as needed
    fontFamily: 'Readex Pro',
    fontWeight: 'Regular',
    color: 'white',
  },
  icon: {
    marginLeft: '20px', // Adjust as needed
    height: '30px', // Adjust as needed
    width: '30px', // Adjust as needed
  },
  logoImage: {
    width: '32px',
    height: '32px',
    marginRight: '120px',
    position: 'absolute'
    
  }
};

export default Header;
