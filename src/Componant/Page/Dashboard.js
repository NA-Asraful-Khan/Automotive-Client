import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start ">
                <h2>This is DashBoard</h2>
                <Outlet />
                <div className='lg:hidden'>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">Open drawer</label>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu m-0 p-4 text-white overflow-y-auto w-80 bg-zinc-500 text-base-content ">
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard'>My Order</Link></li>
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard/AddReview'>My Review</Link></li>
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard/MyProfile'>My Profile</Link></li>
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard/ManageOrder'>Manage Order</Link></li>
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard/AddProduct'>Add Product</Link></li>
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard/MakeAdmin'>Make Admin</Link></li>
                    <li><Link className='no-underline mb-2 hover:text-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-zinc-600' to='/DashBoard/ManageProducts'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;