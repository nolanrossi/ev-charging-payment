import React, { useState } from 'react';


import "@fontsource/readex-pro";
import "@fontsource/inter";
import "@fontsource/quicksand";
import '@fontsource-variable/noto-sans-tc';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import PayButton from './payButton';
import breadIcon from '../static/breadIcon.png'; // Importing the image






const PaymentTab = () => {
    const [isCardFocused, setIsCardFocused] = useState(false);
    const [isExpryFocused, setIsExpryFocused] = useState(false);
    const [isCVVFocused, setIsCVVFocused] = useState(false);
    const [isCardNameFocused, setIsCardNameFocused] = useState(false);
    const [isZipFocused, setIsZipFocused] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);


  return (
    <div style={styles.paymentContainer}>
        <div style={styles.paymentRow}>
            <div style={styles.paymentLeft}>
                <img src={breadIcon} style={styles.paymentSymbol} />
                <span style={styles.paymentText}>Total:</span>
                <span style={styles.priceText}>$12</span>
            </div>
        </div>
        <div style={styles.dottedLine}></div>
        <div 
            style={termsAccepted ? styles.shadedTotalContainer : styles.totalContainer}
            onChange={() => setTermsAccepted(!termsAccepted)}
        >

            <label style={styles.customCheckbox}>
                <input
                type="checkbox"
                checked={termsAccepted}
                
                style={styles.actualCheckbox}
                />
                <span style={termsAccepted ? styles.checkedBox : styles.customBox}></span>
                I accept the Terms & Conditions
            </label>

        </div>
        <div style={styles.editContainer}>

            <div style={styles.cardInputSection}>
                    <div style={styles.paymentHelperText}>
                        Card
                    </div>
                <input 
                    style={isCardFocused ? styles.focusedcardInput : styles.cardInput} 
                    placeholder="1234 1234 1234 1234" 
                    onFocus={() => setIsCardFocused(true)}
                    onBlur={() => setIsCardFocused(false)}
                />

            </div>
            <div style={styles.doubleInputRow}>
                <div style={styles.paymentCol}>
                    <div style={styles.paymentHelperText}>
                        Expiry
                    </div>
                    <input 
                        style={isExpryFocused ? styles.focusedpaymentInput : styles.paymentInput} 
                        placeholder="MM/YY" 
                        onFocus={() => setIsExpryFocused(true)}
                        onBlur={() => setIsExpryFocused(false)}
                    />
                </div>
                <div style={styles.paymentCol}>
                    <div style={styles.paymentHelperText}>
                        CVV
                    </div>
                    <input 
                        style={isCVVFocused ? styles.focusedpaymentInput : styles.paymentInput} 
                        placeholder="123" 
                        onFocus={() => setIsCVVFocused(true)}
                        onBlur={() => setIsCVVFocused(false)}
                    />
                </div>
                
            </div>
            <div style={styles.doubleInputRow}>
                <div style={styles.paymentCol}>
                    <div style={styles.paymentHelperText}>
                        Name on Card
                    </div>
                    <input 
                        style={isCardNameFocused ? styles.focusedpaymentInput : styles.paymentInput} 
                        placeholder="John Smith" 
                        onFocus={() => setIsCardNameFocused(true)}
                        onBlur={() => setIsCardNameFocused(false)}
                    />
                </div>
                <div style={styles.paymentCol}>
                    <div style={styles.paymentHelperText}>
                        Zip Code
                    </div>
                    <input 
                        style={isZipFocused ? styles.focusedpaymentInput : styles.paymentInput} 
                        placeholder="12345" 
                        onFocus={() => setIsZipFocused(true)}
                        onBlur={() => setIsZipFocused(false)}
                    />
                </div>
                
            </div>
            <PayButton/>
        </div>

    </div>
  );
};

const styles = {
    paymentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: '24px'
    },
    dottedLine: {
        height: 0,
        borderTop: '2px dashed #a3a3a3',  // Change 'black' to any color you prefer
        marginBottom: '24px',  // Provides some space above and below the line
    },
    editContainer: {
        padding: '16px',
        borderRadius: '20px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
    },
    paymentRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '12px', // Space between the icons/text row and the input box
        boxSizing: 'border-box'
    },
    doubleInputRow: {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        alignItems: 'left',
        paddingRight: '20px',
        width: '100%',
        gap: '30px', // Increase the gap a bit
        marginBottom: '8px'
    },
    centeredText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // or any desired height
    },
    paymentCol: {
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(50% - 10px)', // Adjusting the width to account for the increased gap
        boxSizing: 'border-box',
    },
    paymentLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    paymentSymbol: {
        width: '28px',
        height: '28px',
        marginRight: '16px',
    },
    paymentText: {
        fontFamily: "'Noto Sans TC Variable', sans-serif",
        fontWeight: '500',  
        fontSize: '24px',
    },
    infoSymbol: {
        width: '24px',
        height: '24px',
    },
    cardInputSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        marginBottom: '8px'
    },
    paymentInput: {
        width: '100%',
        maxWidth: '100%',
        padding: '8px',
        border: '1px solid #c9c9c9',
        borderRadius: '12px',
        paddingLeft: '12px',
    },
    focusedpaymentInput: {
        width: '100%',
        padding: '8px',
        border: '1px solid #70ee9b', // Color when focused
        borderRadius: '12px',
        outline: 'none', // This will remove the default browser focus outline
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        paddingLeft: '12px',
    },
    cardInput: {
        width: '100%',
        padding: '8px',
        border: '1px solid #c9c9c9',
        borderRadius: '12px',
        backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABQCAYAAACDD4LqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAxtJREFUeJzt3M9L03Ecx/HX+/0dWpSHooOX8JBtQYQYSUGH5ambzpnRRV1ePERQf4FUp05BRYHQ/HVKnRn9PGX+AeYlbItIjZAsSEyEULd3hyR0+44c4/2d3/F+3Pb5fOf3zfPw2fyCAsYYY4zP0NYXtS+vVgZ+r1zKiDSBKESCPaUazA+EZJmEpoloKBntm9y69y9s7Uh7PTv8mEBHvR+xLDxZ36i4/Pli7zKwGTY00nVKOP2GiKpKO5u/CeQdsXMuFYmvcGi8qwqcHrOoxSPQSUln7gIAI53pBtHhUg9VLogQC452HgsAaHO7QASrgHz1eC4/cQh0BLT9CwAAEKM1IMDx7B0RWawIBOreNz9a9GhIXwolOpoAfuqydYKJsC97lQhTFvX/UtHBZ+47tJ/zbIjeOGWEkLdTnrCmWBZWiYVVYmGVWFglFlaJhVViYZUEXFdFTgfHOl97PEtZcQ9LdIiA8x7PUlbsKFBiYZVYWCUWVomFVWJhlVhYJRZWiYVVYmGVWFglFlaJhVViYZVYWCX5HnTPENFDj2fxJQHuua3ne9A9m4z231edqEyExmKuYe0oUGJhlVhYJRZWiYVVYmGVWFglFlaJhVViYZVYWCUWVomFVWJhlVhYJe7PY/MIjXY0ClHdTq5loqVktH8ge712pL2emcOF3DcH0ezHaL/bHwfvGgWFBXMrAVd2cmlGJAUgJywzh4noTkH3zfUCwK4Oa0eBEgurxMIqsbBKCvrwSjM94HTm+U6uFaZVt3VijEtGkoXcNxszfhTzfi8UFPZTpG8GwEwxN0y1DMwBmCvmZ/iBHQVKLKySfGEdT6fwqfBET96jlCH4lb0oImeDiVgDJPefdZm/whM9gW8/56+5boosUTDR+ZaIivvd3WwjItcZjKFSD1JOBFgjxxnmqu+VgwCmSz1QuSDgdioSX+Cp7t51znCLAF9KPZTvCcarD9TcBDa/FXy4EJ9nWT8DwavSTuZPAqwBuFV9sKZtsvHGBoDcT/1gItYAoBkkIQLt9XpIXxFZEmCKHGc4FYkvlHocY4wxxuxGfwCVXbhCCcRmvwAAAABJRU5ErkJggg==")',
        backgroundPosition: 'calc(0% + 12px) center', // Adjust as needed
        backgroundRepeat: 'no-repeat',
        paddingLeft: '40px',
        backgroundSize: '18px 18px',
        boxSizing: 'border-box',
    },
    focusedcardInput: {
        width: '100%',
        padding: '8px',
        border: '1px solid #70ee9b',
        borderRadius: '12px',
        backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABQCAYAAACDD4LqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAxtJREFUeJzt3M9L03Ecx/HX+/0dWpSHooOX8JBtQYQYSUGH5ambzpnRRV1ePERQf4FUp05BRYHQ/HVKnRn9PGX+AeYlbItIjZAsSEyEULd3hyR0+44c4/2d3/F+3Pb5fOf3zfPw2fyCAsYYY4zP0NYXtS+vVgZ+r1zKiDSBKESCPaUazA+EZJmEpoloKBntm9y69y9s7Uh7PTv8mEBHvR+xLDxZ36i4/Pli7zKwGTY00nVKOP2GiKpKO5u/CeQdsXMuFYmvcGi8qwqcHrOoxSPQSUln7gIAI53pBtHhUg9VLogQC452HgsAaHO7QASrgHz1eC4/cQh0BLT9CwAAEKM1IMDx7B0RWawIBOreNz9a9GhIXwolOpoAfuqydYKJsC97lQhTFvX/UtHBZ+47tJ/zbIjeOGWEkLdTnrCmWBZWiYVVYmGVWFglFlaJhVViYZUEXFdFTgfHOl97PEtZcQ9LdIiA8x7PUlbsKFBiYZVYWCUWVomFVWJhlVhYJRZWiYVVYmGVWFglFlaJhVViYZVYWCX5HnTPENFDj2fxJQHuua3ne9A9m4z231edqEyExmKuYe0oUGJhlVhYJRZWiYVVYmGVWFglFlaJhVViYZVYWCUWVomFVWJhlVhYJe7PY/MIjXY0ClHdTq5loqVktH8ge712pL2emcOF3DcH0ezHaL/bHwfvGgWFBXMrAVd2cmlGJAUgJywzh4noTkH3zfUCwK4Oa0eBEgurxMIqsbBKCvrwSjM94HTm+U6uFaZVt3VijEtGkoXcNxszfhTzfi8UFPZTpG8GwEwxN0y1DMwBmCvmZ/iBHQVKLKySfGEdT6fwqfBET96jlCH4lb0oImeDiVgDJPefdZm/whM9gW8/56+5boosUTDR+ZaIivvd3WwjItcZjKFSD1JOBFgjxxnmqu+VgwCmSz1QuSDgdioSX+Cp7t51znCLAF9KPZTvCcarD9TcBDa/FXy4EJ9nWT8DwavSTuZPAqwBuFV9sKZtsvHGBoDcT/1gItYAoBkkIQLt9XpIXxFZEmCKHGc4FYkvlHocY4wxxuxGfwCVXbhCCcRmvwAAAABJRU5ErkJggg==")',
        backgroundPosition: 'calc(0% + 12px) center', // Adjust as needed
        backgroundRepeat: 'no-repeat',
        paddingLeft: '40px',
        backgroundSize: '18px 18px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        outline: 'none', // This will remove the default browser focus outline
    },
    paymentHelperText: {
        fontFamily: 'Inter',
        fontSize: '12px',
        marginBottom: '4px',
        marginLeft: '12px'
    },
    totalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '6px',
        position: 'relative', // This is added to position the priceText in the middle
        marginBottom: '24px',
        borderRadius: '12px',
        border: '2px solid #ffffff',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        fontFamily: "'Noto Sans TC Variable', sans-serif",
        fontWeight: '500',  
    },
    shadedTotalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '6px',
        position: 'relative', // This is added to position the priceText in the middle
        marginBottom: '24px',
        borderRadius: '12px',
        border: '2px solid #70ee9b',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        fontFamily: "'Noto Sans TC Variable', sans-serif",
        fontWeight: '500',  
        
    },
    totalText: {
        fontFamily: 'quicksand',
        fontSize: '16px',
        marginBottom: '12px',
        
    },
    priceText: {
        fontFamily: 'quicksand',
        fontSize: '16px',
        position: 'absolute', // This will position the text relative to the totalContainer
        right: '0%', // This will push the text to the middle
        transform: 'translateX(-50%)', // This will center the text exactly in the middle
        fontFamily: "'Noto Sans TC Variable', sans-serif",
        fontWeight: '500',  
        fontSize: '24px',
        marginRight: '40px'
    },
    actualCheckbox: {
        display: 'none',
    },
    customCheckbox: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    customBox: {
        display: 'inline-block',
        width: 16,  // Size of the box
        height: 16,
        marginRight: 8,  // Spacing between the box and the label text
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#64c478',  
        backgroundColor: 'transparent',
    },
      checkedBox: {
        display: 'inline-block',
        width: 16,  // Size of the box
        height: 16,
        marginRight: 8,  // Spacing between the box and the label text
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#70ee9b', //29a324
        backgroundColor: 'rgba(103, 223, 124, 0.6)',
        // rgba(115, 113, 235, 0.7)
    }
};

export default PaymentTab;
