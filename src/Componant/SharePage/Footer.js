import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer footer-center p-10 bg-dark text-base-content rounded">
            <div>
                <p className='text-white mt-2 w-full'>Copyright &copy;{year} <Link className='text-decoration-none text-danger' to="/">Automotive Parts Manufacturing</Link> All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;