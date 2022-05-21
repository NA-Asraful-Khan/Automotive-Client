import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
            <button  onClick={() => google()} className='btn btn-danger'><img style={{width: '30px'}} className="" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Sign in with Google</button>
        </div>
    );
};

export default SocialLogIn;