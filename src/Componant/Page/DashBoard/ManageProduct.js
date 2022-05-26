import React from 'react';

const ManageProduct = ({ item, index,openModal }) => {
    const { _id,productName, company, price, availableQuantity, minimumOrder } = item
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{company}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>{minimumOrder}</td>
            <td><button onClick={() => openModal(_id)} className='btn btn-danger d-block m-2'>Delete Item</button></td>
        </tr>
    );
};

export default ManageProduct;