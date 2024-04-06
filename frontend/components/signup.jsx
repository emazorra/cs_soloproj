import React, { useState } from 'react';


const SignupForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            console.log('Sign up successful');
        } else {
            setError('Check if account already created')
        }

    } catch (err) {
        setError('Failed to create account. Please try again later')
        console.log('Sign Up failed: ', error);
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <div className="signup_form">
            <h2>Sign up</h2>
        <label htmlFor='user-email'>Email: </label>
        <input
        type="email"
        id="username"
        name="email"
        placeholder='example@gmail.com'
        onChange={handleUsernameChange}
        />
        </div>
        <div className="signup_form">
            <label htmlFor='password'>Password: </label>
            <input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            />
        </div>
        <button className="signup_btn" type="submit">Sign Up</button>
    </form>
  )

}

export default SignupForm;