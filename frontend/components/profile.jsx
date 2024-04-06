import React from 'react';
import LoginForm from './login.jsx'
// get information from database
// or get it from form
// pass response on the props
// here in profile, take in props and destructure it and return it on component

const Profile = ({ firstName, lastName, address, city, state, phoneNum, email, startDate }) => {
    console.log('firstName: ', firstName);

    return(
        <div>
            <h1>Welcome, {firstName} to your Left Rising HR Profile</h1>
            <h2> Please verify all information below is correct </h2>
            <p>Full Name: {firstName} {lastName}</p>
            <p>Secondary Email: {email}</p>
            <p>Address: {address}, {city}, {state}</p>
            <p>Phone Number: {phoneNum}</p>
            <p>Start Date: {startDate}</p>
        </div>
    )
}

export default Profile;