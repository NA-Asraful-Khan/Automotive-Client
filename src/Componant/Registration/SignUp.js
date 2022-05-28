import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import SocialLogIn from './SocialLogIn';
import Loading from '../SharePage/Loading';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const [updateProfile,updating] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState('');

    const [
        createUserWithEmailAndPassword,user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user);


    const handleSignup = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            return toast.error("Password should be minimum 6 character");
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile(displayName)
        toast.success('Registration Succesfull')
    }

    if(token){
        navigate('/');
    }
    if (updating) {
        return <Loading></Loading>
      }
    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block text-start'>
            <h2 className='text-center'>Sign Up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setDisplayName(e.target.value)} type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already Have An Account?  <Link className='text-decoration-none' to='/login'>Click Here</Link></p>
                <button className='btn btn-primary' type="submit">
                    SignUp
                </button>
            </Form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;