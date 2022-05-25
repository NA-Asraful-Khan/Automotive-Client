import React, { useEffect, useState } from 'react';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    const handleOrderDelet = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = order.filter(item => item._id !== id);
                        setOrder(remaining);
                    }
                })
        }

    }
    return (
        <div>
            <h2>Manage All Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order By</th>
                            <th>Product Name</th>
                            <th>Company Name</th>
                            <th>Per Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((item, index) => <ManageAllOrder
                                key={item._id}
                                item={item}
                                index={index}
                                handleOrderDelet={handleOrderDelet}
                            ></ManageAllOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;