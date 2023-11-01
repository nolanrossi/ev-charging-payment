import React, { useState, useEffect, useRef } from 'react';
import CollectJSSection from "./CollectJSSection";

const InlineCartPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Create a ref to store the latest state values
  const stateRef = useRef();
  stateRef.current = { firstName, lastName, amount };

  useEffect(() => {
    window.CollectJS.configure({
      variant: 'inline',
      styleSniffer: false,
      callback: (token) => {
        console.log(token);
        finishSubmit(token);
      },
      fields: {
        ccnumber: {
          placeholder: 'CC Number',
          selector: '#ccnumber'
        },
        ccexp: {
          placeholder: 'CC Expiration',
          selector: '#ccexp'
        },
        cvv: {
          placeholder: 'CVV',
          selector: '#cvv'
        }
      }
    });
  }, []);

  const finishSubmit = (response) => {
    const formData = {
      ...stateRef.current, // Use the ref's current value
      token: response.token
    };
    console.log(formData);
    setIsSubmitting(false);
    setAlertMessage('The form was submitted. Check the console to see the output data.');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.CollectJS.startPaymentRequest();
  }

  return (
    <div className="payform">
      {alertMessage && (
        <div className="alert">
          {alertMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={event => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={event => setLastName(event.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            onChange={event => setAmount(event.target.value)}
            value={amount}
          />
        </div>
        <CollectJSSection />
        <button
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InlineCartPage;
