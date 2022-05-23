import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Images/banner.jpg'

const Banner = () => {
    const mystyle = {
        backgroundImage: `url(${banner}`
      };
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage:`url(${banner}`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-green-500/50">Welcome To Our Website</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;