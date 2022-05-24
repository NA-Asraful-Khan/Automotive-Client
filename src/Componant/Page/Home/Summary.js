import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcCurrencyExchange } from 'react-icons/fc';
import { MdRateReview } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';

const Summary = () => {
    return (
        <div className='p-12 bg-stone-200'>
            <h1 className='mb-8'>Our Clients Trusted Us!</h1>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <BsFillPeopleFill className='inline text-5xl' />
                    </div>
                    <div className="stat-title">Customers Served</div>
                    <div className="stat-value">500+</div>
                    <div className="stat-desc">Jan 1st,2020 - Feb 1st,2022</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <FcCurrencyExchange className='inline text-5xl' />
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value">$1M</div>
                    <div className="stat-desc">Growth: 35%</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <MdRateReview className='inline text-5xl' />
                    </div>
                    <div className="stat-title">Feedback</div>
                    <div className="stat-value">150+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <FaTools className='inline text-5xl' />
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value">100+</div>
                    <div className="stat-desc">Qualityfull</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;