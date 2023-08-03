import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const onSubmit = (data, e) => {
        if (data.ratings < 1 || data.ratings > 5) {
            toast.error("Please Input number Between 1-5")
        } else {
            toast.success("Your Review Added Succesfully!")
            
            const email = user?.email;
            const name = user?.displayName;
            const review = data.review;
            const ratings = data.ratings;
            const reviews = { email, name, review, ratings }
            fetch('https://automotive-server.vercel.app/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviews)
            })
                .then(res => res.json())
                .then(data => {
                    e.target.reset();;
                })
        }

    };
    return (
        <div>
            <h2>Add rivew</h2>
            <form className='flex justify-center flex-col w-50 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-start'><h5>Your Review</h5></label>
                <textarea className="textarea textarea-info w-full my-4" placeholder="Type Your Review" {...register("review")}></textarea>
                <label className='text-start'><h5>Your Ratings</h5></label>
                <input className="input input-bordered input-info w-full max-w-xs my-2" placeholder='Give Ratings(1-5)' type="number" {...register("ratings")} />
                <p className='text-danger text-start py-2'>{error}</p>
                <input className='btn btn-primary my-4' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;