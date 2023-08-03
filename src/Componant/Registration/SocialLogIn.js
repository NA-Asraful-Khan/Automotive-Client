import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const google = () => {
        signInWithGoogle();
    }
    if (user) {
        navigate(from);
    }
    return (
        <div className='d-flex justify-content-center my-5'>
            <button onClick={() => google()} className='btn btn-danger d-flex align-items-center'>
                <img style={{ width: '20px' }} className="mr-2" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                <p className='m-0'>Sign in with Google</p>
            </button>
        </div>
    );
};

export default SocialLogIn;