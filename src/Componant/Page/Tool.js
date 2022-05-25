import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ item }) => {
    const { _id,productName, picture, price, availableQuantity, minimumOrder, description, company } = item;
    const navigate = useNavigate();
    const navigatetoDetail = id => {
        navigate(`/Tools/${id}`)
    };
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-danger">{productName}</h2>
                    <div className='text-start pl-6'>
                        <h5>Company: {company}</h5>
                        <h5>Price: {price}</h5>
                        <h5>Available Quantity: {availableQuantity}</h5>
                        <h5>Minimum Order: {minimumOrder}</h5>
                        <p>Description: {description}</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => navigatetoDetail(_id)} className='btn btn-primary m-2 d-block'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;