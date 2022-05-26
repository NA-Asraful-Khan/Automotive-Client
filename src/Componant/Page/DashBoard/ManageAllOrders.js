import React, { useEffect, useState } from 'react';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {
    const [order, setOrder] = useState([]);
    const [modal, setModal] = useState(false);
    const [agree, setAgree] = useState(false);
    const [itemID, setItemID] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])
    const openModal =(id)=>{
        setModal(true);
        setItemID(id);
        console.log(itemID)
    }

    const handleOrderDelet = (id) => {
        setAgree(true);
        setModal(false);
        if (agree===true) {
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
    const closeModal = () => {
        setModal(false);
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((item, index) => <ManageAllOrder
                                key={item._id}
                                item={item}
                                index={index}
                                openModal={openModal}
                            ></ManageAllOrder>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <div className={`my-modal-cont fixed top-0 left-0 bg-slate-300/50 w-screen h-screen rounded p-8 flex justify-center items-center ${!modal ? "hidden" : ""}`} id='my-modal-cont'>
                    <div className='my-modal-body text-danger bg-white rounded p-8'>
                        <h1 className='text-warning'>Warning!</h1>
                        <p>Are You Sure,  You Want to Delete?</p>
                        <button onClick={() => handleOrderDelet(itemID)} className='btn-danger p-2 rounded' id='close-modal'>Yes, I Agree.</button>
                        <button onClick={closeModal} className='btn-danger mx-2 p-2 rounded' id='close-modal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;