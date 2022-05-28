import React, { useState } from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center pt-3'>Blog</h2>
            <div className='text-start'>
                <h3>Question: How will you improve the performance of a React Application?</h3>
                <p>Answer:To optimize React rendering, I need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
            </div>
            <div className='text-start'>
                <h3>Question: What are the different ways to manage a state in a React application?</h3>
                <p>Answer: The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. For example, let us think of the clock that we created in this article, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. We will look into this more elaborately later in the article.</p>
                <p>We have already learned about Props and we got to know that Props are also objects that hold information to control the behavior of that particular component, sounds familiar to State indeed but props and states are nowhere near be same. Let us differentiate the two.</p>
                <p>We have also seen a few places where we can use State now all that is left is to know about the basic conventions of using the React State before implementing one for ourselves.</p>

            </div>
            <div className='text-start'>
                <h3>Question: How does prototypical inheritance work?</h3>
                <p>Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div className='text-start'>
                <h3>Question: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>Answer: The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.</p>
            </div>
            <div className='text-start'>
                <h3>Question: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p>Answer: First I will fetch the array and impliment map filter with the result. then I will create a search field and set the value of the field in an variable. Then I will apply a condition with the value of searchfield and the value of product name. If the search field result match with the name of the product, then it will show the data of that particular product. </p>
            </div>
            <div className='text-start'>
                <h3>Question: What is a unit test? Why should write unit tests?</h3>
                <p>Answer: Developers looking to learn what functionality is provided by a unit and how to use it can look at the unit tests to gain a basic understanding of the unit API. Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
                <p>Due to the modular nature of the unit testing, we can test parts of the project without waiting for others to be completed.</p>
            </div>
        </div>
    );
};

export default Blogs;