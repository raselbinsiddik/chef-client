// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
    return (
        <div  className='text-xl bg-slate-300 m-5'>
            <h1 className='text-2xl font-bold'>Question1: Tell us the differences between uncontrolled and controlled components.</h1>
            <p className='bg-slate-50 m-2 rounded-lg'>Answer1: Uncontrolled components refer to those parts of the application where the developer has little or no control over its behavior. Examples of uncontrolled components include the browser native form elements such as input, textarea, and select. These elements are controlled by the browser and their behavior cannot be easily modified by the developer.</p>
            <h1 className='text-2xl font-bold'>Question2: How to validate React props using PropTypes</h1>
            <p className='bg-slate-50 m-2 rounded-lg'>Answer2: PropTypes has many built-in validators for various data types such as string, number, boolean, array, object, function, and others. Developers can also create custom validators for more complex data types or validation requirements.</p>
            <h1 className='text-2xl font-bold'>Question3: Tell us the difference between nodejs and express js.</h1>
            <p className='bg-slate-50 m-2 rounded-lg'>Answer3: Node.js is a runtime environment that allows developers to use JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications.</p>
            <h1 className='text-2xl font-bold'>Question4: What is a custom hook, and why will you create a custom hook?</h1>
            <p className='bg-slate-50 m-2 rounded-lg'>
                Answer4: In React, a custom hook is a function that allows developers to extract reusable logic from a component and share it across multiple components. A custom hook is a JavaScript function that starts with the prefix use and typically uses other built-in React hooks to compose its behavior.
            </p>
        </div>
    );
};

export default Blog;