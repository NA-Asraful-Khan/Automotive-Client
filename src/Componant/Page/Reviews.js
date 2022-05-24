import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='bg-slate-900 p-8'>
            <h1 className='text-white'>Reviews</h1>
            <Swiper
                autoplay={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div class="card w-full bg-transparent text-white m-auto">
                            <div class="card-body items-center text-center my-8">
                                <h3>{review.name}</h3>
                                <h4>
                                    <ImQuotesLeft className='inline text-5xl mx-4' />
                                    {review.review}
                                    <ImQuotesRight className='inline text-5xl mx-4' />
                                </h4>
                                <h5>Ratings: {review.ratings}</h5>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide><img className='m-auto w-full' src="https://i.ibb.co/KLrwjmB/s1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='m-auto w-full' src="https://i.ibb.co/KLrwjmB/s1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='m-auto w-full' src="https://i.ibb.co/KLrwjmB/s1.jpg" alt="" /></SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Reviews;