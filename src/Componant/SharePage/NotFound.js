import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/755/755064.png" alt="" />
            <h2 className='text-danger'>This page is outside of the Universe</h2>
            <h3 className='text-muted'>The page you are trying to access does not exist or has been moved.</h3>
            <h3 className='text-warning'>Try going back to our homepage.</h3>
            <Link className='btn btn-primary mb-5' to='/'>Home</Link>
        </div>
    );
};

export default NotFound;