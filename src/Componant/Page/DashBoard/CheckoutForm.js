import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({payinfo}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const {totalAmount,name,email}= payinfo
    useEffect(() => {
        fetch(`https://automotive-server.vercel.app//create-payment-intent`, {
          method: "POST",
          headers: {
               "Content-Type": "application/json" ,
               "authorization":`Bearer ${localStorage.getItem('accessToken')}`
            },
          body: JSON.stringify({totalAmount}),
        })
          .then((res) => res.json())
          .then((data) => {
              if(data?.clientSecret){
                setClientSecret(data.clientSecret)
              }
          });
      }, [totalAmount]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message);
        } else {
            setCardError('');
        }

        setCardSuccess('')

        //confirm card payment

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
          );

          if(intentError){
            setCardError(intentError?.message);
            
          }else{
            setCardError('');
            setCardSuccess('Congrats! Your Payment is Completed')
          }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='border-solid border-2 border-indigo-600 p-4 rounded'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#f87171',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-info text-white m-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
               cardError && <p className='text-danger'>{cardError}</p>
            }
            {
               cardSuccess && <p className='text-success'>{cardSuccess}</p>
            }
        </>
    );
};

export default CheckoutForm;