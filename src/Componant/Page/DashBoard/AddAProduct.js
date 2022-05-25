import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const AddAProduct = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = (e) => { 
        e.preventDefault();
        const productName = e.target.productName.value;
        const company = e.target.company.value;
        const price = e.target.price.value;
        const availableQuantity = e.target.availableQuantity.value;
        const minimumOrder = e.target.minimumOrder.value;
        const description = e.target.description.value;
        const picture = e.target.picture.value;
        const name = user.displayName;
        const email = user.email;

        const product = {productName,company,price,availableQuantity,minimumOrder,description,picture,name,email}
        console.log(product)
        fetch('http://localhost:5000/tool',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            toast.success("Item Added Succesfully!")
            e.target.reset();
        }) 
    }
    return (
        <div>
            <h2>Add A Product</h2>
            <Form className='w-50 m-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCarName">
                    <Form.Control name="productName" type="text" placeholder="Enter Tool Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control name="company" type="text" placeholder="Enter Company Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control name="price" type="text" placeholder="Enter Price Amount" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control name="availableQuantity" type="number" placeholder="Enter Available Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMinOrder">
                    <Form.Control name="minimumOrder" type="number" placeholder="Enter Minimum Order" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control name="description" as="textarea" type="text" placeholder="Enter Short Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPicture">
                    <Form.Control name="picture" type="text" placeholder="Enter Image Url" />
                </Form.Group>
                <button className='btn btn-primary' variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default AddAProduct;