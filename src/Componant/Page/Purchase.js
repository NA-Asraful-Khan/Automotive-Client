import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    const productName = item.productName;
    const company = item.company;
    const availableQuantity = parseInt(item.availableQuantity);
    const minimumOrder = parseInt(item.minimumOrder);
    const price = parseInt(item.price);
    const name = user?.displayName;
    const email = user?.email;
    const [disable, setDisable] = useState("");
    const [error, setError] = useState("");
    

    const quantityHandle=(e)=>{
        const change = e.target.value
        if(change<0){
            setError(`Please Input Positive Number`)
        }else if(change===""){
            setError(``)
            setDisable(change)
        }else if(change<minimumOrder){
            setDisable("")
            setError(`Minimum Order is ${minimumOrder}`)
        }else if(change>availableQuantity){
            setDisable("")
            setError(`Sorry! Not Enough Stock.`)
        }else{
            setError(``)
            setDisable(change)
        }
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const order = {name, email, productName, company, availableQuantity, minimumOrder, price,quantity}

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Your Order Has Been Succesfully Place")
                e.target.reset();
            })
    }

    return (
        <div>
            <h2>Purchase Your Order</h2>
            <div className="card w-96 bg-base-100 shadow-xl m-auto">
                <figure><img src={item.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-muted'>Product Name:</span> {productName}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Company:</span> {company}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Price:</span> ${price}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Available Quantity:</span> {availableQuantity}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Minimum Order:</span> {minimumOrder}</h2>
                    <div className="divider m-1"></div>
                    <Form onSubmit={handlePurchase}>
                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <label><h5>Quantity</h5></label>
                            <Form.Control onChange={quantityHandle} name="quantity" type="number" placeholder="Enter Your Quantity" />
                            <p className='text-danger text-start py-2'>{error}</p>
                        </Form.Group>
                        <button className={`btn btn-primary ${!disable? "disabled":""}`} variant="primary" type="submit">
                            Add to Order
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;