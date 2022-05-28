import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ item, index,openModal }) => {
    const { _id,productName, company, price,quantity,totalAmount } = item
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{company}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>${totalAmount}</td>
            <td>Pending</td>
            <td><Link to={`/DashBoard/Payment/${_id}`} className='btn btn-danger d-block lh-lg'>Make Payment</Link></td>
            <td><button onClick={() => openModal(_id)} className='btn btn-danger d-block m-2'>Cancel Order</button></td>
        </tr>
    );
};

export default MyOrder;