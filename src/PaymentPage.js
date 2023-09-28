import React, { useState } from 'react';
import StripeContainer from './stripe';
import './PaymentPage.css'; 
function PaymentPage() {
    const [showItem, setShowItem] = useState(false);

    return (
        <div className="container"> 
            <h1>DevLink Marketplace Application Payment</h1>
            {showItem ? (
                <StripeContainer />
            ) : (
                <>
                    <h3>$120.00</h3>
                    <button onClick={() => setShowItem(true)}>Pay</button>
                </>
            )}
        </div>
    );
}

export default PaymentPage;
