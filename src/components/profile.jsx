import React from 'react';
import LoginForm from './login.jsx'
import Box from '@mui/material/Box';
import Update from './update.jsx';
// get information from database
// or get it from form
// pass response on the props
// here in profile, take in props and destructure it and return it on component

const Profile = ({ firstName, lastName, address, city, state, phoneNum, email, startDate }) => {
    // console.log('firstName: ', firstName);
    // const user = { firstName, lastName, address, city, state, phoneNum, email, startDate};

    const handleSubmit = e => {
        console.log(`One day I'll finish this!`);
    }

    return(
        <Box className="profile" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <h1>Welcome, {firstName} to your Left Rising HR Profile</h1>
            <h3> Please verify all information below is correct </h3>
            <p>Full Name: {firstName} {lastName}</p>
            <p>Secondary Email: {email}</p>
            <p>Address: {address}, {city}, {state}</p>
            <p>Phone Number: {phoneNum}</p>
            <p>Start Date: {startDate}</p>
            <button className="update_btn" type="submit" onClick={handleSubmit}>Update Information</button>
        </Box>
    )
}

export default Profile;