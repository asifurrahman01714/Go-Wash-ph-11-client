import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeGg3EuVSP8KSGPazxmswTLnIIP9ySozpiL2kGclCfQEMVAwe7Oy3V9rzBRqOfZJtGy4tkyoL1YTF37SAhQJ3Hy000qogtUcX');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;