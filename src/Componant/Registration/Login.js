import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import SocialLogIn from './SocialLogIn';

const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [token] = useToken(user);

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    if (error) {
        toast.error(error?.message);
    }

    if (token) {
        navigate(from);
    }
    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block text-start'>
            <h2 className='text-center'>Log In</h2>
            <Form onSubmit={handleSignin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p>New To this Site? For Sign Up <Link className='text-decoration-none' to='/signup'>Click Here</Link></p>
                <button className='btn btn-primary' type="submit">
                    Sign In
                </button>
            </Form>
            <p>Forgot Password?  <button className='btn text-primary'
                onClick={async () => {
                    if (!email) {
                        return toast.error("Please input email");
                    } else {
                        await sendPasswordResetEmail(email);
                        toast.success('Recovery Email sent');
                    }
                }}
            >
                Reset password
            </button></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;