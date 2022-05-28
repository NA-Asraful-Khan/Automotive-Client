import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Profileform = () => {
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;

    const handleUpdate=e=>{
        e.preventDefault();
        const address = e.target.address.value
        const mobile = e.target.mobile.value
        const education = e.target.education.value
        const linkedin = e.target.linkedin.value

        const data = {address,mobile,education,linkedin,name,email}

        fetch(`https://cryptic-woodland-87675.herokuapp.com/update/${email}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(res =>res.json())
            .then(data=>{
                
                toast.success("Succesfully Updated Profile!")
            })
        e.target.reset()
    }
    return (
        <div>
            <h2 className='mt-4'>Update Your Profile</h2>
            <Form className='w-50 m-auto m-8' onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicAdress">
                    <Form.Label><h5>Address</h5></Form.Label>
                    <Form.Control name='address' type="text" placeholder="Enter Your Adress" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label><h5>Mobile</h5></Form.Label>
                    <Form.Control name='mobile' type="number" placeholder="Give Us Your Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEducation">
                    <label><h5>Education</h5></label>
                    <Form.Control name="education" type="text" placeholder="Enter Your Education Qualification" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLinkedin">
                    <label><h5>Linkedin</h5></label>
                    <Form.Control name="linkedin" type="text" placeholder="Enter Your Linkedin URL" />
                </Form.Group>
                <button className={`btn btn-primary mb-8`} variant="primary" type="submit">
                    Update Profile
                </button>
            </Form>
        </div>
    );
};

export default Profileform;