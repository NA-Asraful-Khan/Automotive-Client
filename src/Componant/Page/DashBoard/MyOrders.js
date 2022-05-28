import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [myOrder, setmyOrder] = useState([]);
    const [modal, setModal] = useState(false);
    const [agree, setAgree] = useState(false);
    const [itemID, setItemID] = useState();
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://cryptic-woodland-87675.herokuapp.com/order/admin?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setmyOrder(data));
    }, [])
    const openModal =(id)=>{
        setModal(true);
        setItemID(id);
        console.log(itemID)
    }
 
    const handleMyOrderDelet = (id) => {
        setAgree(true);
        setModal(false);
        if (agree===true) {
            const url = `https://cryptic-woodland-87675.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myOrder.filter(item => item._id !== id);
                        setmyOrder(remaining);
                    }
                })
        }
    }

    // Modal 
    
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
                            <th>Product Name</th>
                            <th>Company Name</th>
                            <th>Per Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Payment Status</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((item, index) => <MyOrder
                                key={item._id}
                                item={item}
                                index={index}
                                openModal={openModal}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
            {/* modal  */}
            <div>
                <div className={`my-modal-cont fixed top-0 left-0 bg-slate-300/50 w-screen h-screen rounded p-8 flex justify-center items-center ${!modal ? "hidden" : ""}`} id='my-modal-cont'>
                    <div className='my-modal-body text-danger bg-white rounded p-8'>
                        <h1 className='text-warning'>Warning!</h1>
                        <p>Are You Sure,  You Want to Cancel?</p>
                        <button onClick={()=>handleMyOrderDelet(itemID)} className='btn-danger p-2 rounded' id='close-modal'>Yes, I Agree.</button>
                        <button onClick={closeModal} className='btn-danger mx-2 p-2 rounded' id='close-modal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;