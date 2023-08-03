import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L4JJAIVnKyPYNk7On2Nb74IKCkDLXcyqICcChCca4GmZxIYHw6Di2qfrZ7JdKKmT4flk44c84Eec0l6AnSQwi3x00nvUYFFlG');

const Payment = () => {
    const { id } = useParams();
    const [payinfo, setPayInfo] = useState({})
    useEffect(() => {
        fetch(`https://automotive-server.vercel.app/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setPayInfo(data);
            })
    }, [])
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-6/12 p-8 lg:text-left">
                        <h2>Pay With Your Credit Card</h2>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm payinfo={payinfo} />
                        </Elements>
                    </div>
                    <div className="card w-6/12 bg-base-100 shadow-xl">
                        <figure><img src={payinfo.picture} alt="" /></figure>
                        <div className="card-body">
                            <h5 className="card-title"><span className='text-muted'>Pay For:</span> {payinfo.productName}</h5>
                            <div className="divider m-1"></div>
                            <h5 className="card-title"><span className='text-muted'>Quantity:</span> {payinfo.quantity}</h5>
                            <div className="divider m-1"></div>
                            <h5 className="card-title"><span className='text-muted'>Per Unit Price:</span> ${payinfo.price}</h5>
                            <div className="divider m-1"></div>
                            <h5 className="card-title"><span className='text-muted'>Total Amount:</span> ${payinfo.totalAmount}</h5>
                            <div className="divider m-1"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;