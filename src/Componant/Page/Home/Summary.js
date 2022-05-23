import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcCurrencyExchange } from 'react-icons/fc';
import { MdRateReview } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';

const Summary = () => {
    return (
        <div className='p-6'>
            <h1>Our Clients Trusted Us!</h1>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-figure text-secondary">
                    <BsFillPeopleFill className='inline text-5xl' />
                    </div>
                    <div class="stat-title">Customers Served</div>
                    <div class="stat-value">500+</div>
                    <div class="stat-desc">Jan 1st,2020 - Feb 1st,2022</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                    <FcCurrencyExchange className='inline text-5xl' />
                    </div>
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value">$1M</div>
                    <div class="stat-desc">Growth: 35%</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                    <MdRateReview className='inline text-5xl' />
                    </div>
                    <div class="stat-title">Feedback</div>
                    <div class="stat-value">150+</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                    <FaTools className='inline text-5xl' />
                    </div>
                    <div class="stat-title">Products</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-desc">Qualityfull</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;