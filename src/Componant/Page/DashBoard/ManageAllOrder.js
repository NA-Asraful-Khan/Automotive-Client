import React from 'react';

const ManageAllOrder = ({item,index,handleOrderDelet}) => {
    const { _id,productName, company, price,quantity,name } = item
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{company}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>${quantity*price}</td>
            <td><button className='btn btn-danger d-block m-2'>Make Payment</button></td>
            <td><button onClick={() => handleOrderDelet(_id)} className='btn btn-danger d-block m-2'>Delete Item</button></td>
        </tr>
    );
};

export default ManageAllOrder;