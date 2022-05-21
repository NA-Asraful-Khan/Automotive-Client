import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import SocialLogIn from './SocialLogIn';

const SignUp = () => {
    const navigate = useNavigate();
    const [updateProfile] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleSignup = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            return toast.error("Password should be minimum 6 character");
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName })
        toast.success('Registration Succesfull')
        navigate('/');
    }
    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block text-start'>
            <h2 className='text-center'>Sign Up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" required />
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