import React from 'react';
import LoginForm from './login.jsx';
import SignupForm from './signup.jsx';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Left Rising HR</h1>
            <div>
                <h2>Log In</h2>
                <LoginForm />
            </div>
            <div> 
                <h2> Or Sign Up</h2>
                <SignupForm/>
            </div> 
        </div>
    )
}

export default HomePage;
