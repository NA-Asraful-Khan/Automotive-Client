import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer bg-dark py-2 text-center'>
            <p className='text-white mt-2'>Copyright &copy;{year} <Link className='text-decoration-none text-danger' to="/">Automotive Parts Manufacturing</Link> All Rights Reserved.</p>
        </div>
    );
};

export default Footer;