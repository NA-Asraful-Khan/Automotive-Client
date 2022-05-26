import React, { useState } from 'react';

const Blogs = () => {
    const [modal,setModal]=useState(false);
    const openModal =()=>{
        setModal(true);
    }

    const closeModal =()=>{
        setModal(false);
    }

    return (
        <div>
            <h2>This is blogs</h2>
            <button onClick={openModal} className='btn btn-primary' id='open-modal'>Click Me</button>
            <div>
                <div className={`my-modal-cont fixed top-0 left-0 bg-slate-300/50 w-screen h-screen rounded p-8 flex justify-center items-center ${!modal? "hidden": ""}`} id='my-modal-cont'>
                    <div className='my-modal-body text-danger bg-white rounded p-8'>
                        <h1>Modals Title</h1>
                        <p>Are You Sure?</p>
                        <button onClick={closeModal} className='btn-danger p-2 rounded' id='close-modal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;