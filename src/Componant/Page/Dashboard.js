import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [admin, setAdmin] = useState({})
    const [user] = useAuthState(auth);
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            });
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-4 relative ">
                <h2 className='flex'>DashBoard</h2>
                <Outlet />
                <div className='lg:hidden'>
                    <label htmlFor="my-drawer-2" className="btn drawer-button inline absolute top-0 left-0"><svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg></label>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu m-0 p-4 text-white overflow-y-auto w-60 bg-zinc-500 text-base-content ">

                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard'>My Profile</Link></li>

                    <li><Link className={`no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600 ${admin.role === 'Admin' ? 'hidden' : ''}`} to='/DashBoard/MyOrders'>My Order</Link></li>
                    <li><Link className={`no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600 ${admin.role === 'Admin' ? 'hidden' : ''}`} to='/DashBoard/AddReview'>Add A Review</Link></li>


                    <li><Link className={`no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600 ${admin.role !== 'Admin' ? 'hidden' : ''}`} to='/DashBoard/ManageOrder'>Manage Order</Link></li>
                    <li><Link className={`no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600 ${admin.role !== 'Admin' ? 'hidden' : ''}`} to='/DashBoard/AddProduct'>Add Product</Link></li>
                    <li><Link className={`no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600 ${admin.role !== 'Admin' ? 'hidden' : ''}`} to='/DashBoard/MakeAdmin'>Make Admin</Link></li>
                    <li><Link className={`no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600 ${admin.role !== 'Admin' ? 'hidden' : ''}`} to='/DashBoard/ManageProducts'>Manage Products</Link></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;