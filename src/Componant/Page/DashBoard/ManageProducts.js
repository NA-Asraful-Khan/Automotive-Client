import React, { useState } from 'react';
import useData from '../../../Hooks/useData';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [items, setItems] = useData();
    const [modal, setModal] = useState(false);
    const [agree, setAgree] = useState(false);
    const [itemID, setItemID] = useState();


    const openModal =(id)=>{
        setModal(true);
        setItemID(id);
        console.log(itemID)
    }

    const handleDelet = (id) => {
        setAgree(true);
        setModal(false);
        if (agree===true) {
            const url = `https://cryptic-woodland-87675.herokuapp.com/tool/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }

    }
    const closeModal = () => {
        setModal(false);
    }
    return (
        <div>
            <h2>Manage Procducts</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Company Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.slice(0, 6).reverse().map((item, index) => <ManageProduct
                                key={item._id}
                                item={item}
                                index={index}
                                openModal={openModal}
                            ></ManageProduct>)
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
                        <button onClick={()=>handleDelet(itemID)} className='btn-danger p-2 rounded' id='close-modal'>Yes, I Agree.</button>
                        <button onClick={closeModal} className='btn-danger mx-2 p-2 rounded' id='close-modal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;