import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;
    const [data, setData] = useState({})

    try {
      } catch (error) {
        console.log(error);
      }
      

    useEffect(() => {
        try {
            fetch(`https://automotive-server.vercel.app/update/${email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
        } catch (error) {
          console.log(error);
        }
        
    }, [])


    return (
        <div>
            <h2>My Profile</h2>
            <div className="card w-6/12 bg-base-100 shadow-xl m-auto">
                <figure><img className='w-6/12 m-6' src='https://cdn-icons-png.flaticon.com/512/74/74472.png' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-muted'>Name:</span> {name}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Email:</span> {email}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Mobile:</span>  {data.mobile}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Education:</span>  {data.education}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Address:</span> {data.address}</h2>
                    <div className="divider m-1"></div>
                    <h2 className="card-title"><span className='text-muted'>Linkedin:</span><a href="https://www.linkedin.com/" target="_blank">{data.linkedin}</a></h2>
                    <div className="divider m-1"></div>
                    <Link to='/profileform' className='btn btn-primary lh-lg'>Update Profile</Link>
                </div>
                <a href=""></a>
            </div>
        </div>
    );
};

export default MyProfile;