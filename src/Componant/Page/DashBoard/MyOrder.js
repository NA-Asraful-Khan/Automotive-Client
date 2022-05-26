import React from 'react';

const MyOrder = ({ item, index,openModal,setItemID }) => {
    const { _id,productName, company, price,quantity } = item
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{company}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>${quantity*price}</td>
            <td>Pending</td>
            <td><button className='btn btn-danger d-block m-2'>Make Payment</button></td>
            <td><button onClick={() => openModal(_id)} className='btn btn-danger d-block m-2'>Cancel Order</button></td>
        </tr>
    );
};

export default MyOrder;