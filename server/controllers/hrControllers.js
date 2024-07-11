const { Employee, EmployeeInfo, LoginInfo, Role } = require('../models/hrModels');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//for next time: need to change all the models in the doc
//finish register user, pulling hashpassword from the locals
//
const hrController = {};

require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

function generateToken (user) {

    const payload = {
        username: user.username,
        password: user.password,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return token;
}

hrController.hashPassword = async (req, res, next) => {

    try {
        const { password } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        req.locals.password = hashedPassword;

        return next();

    } catch (err) {
        return next({
            log: 'hr.Controller.hashPassword',
            message: { err : 'Could not hash password', details: err.message }
        });
    }
}

hrController.registerUser = async (req, res, next) => {

    const { username, password } = req.body;

    try {

    } catch (err) {
        return next({
            log: 'hr.Controller.registerUser',
            message: { err : 'Could not register user', details: err.message }
        });
    }
}

hrController.addUser = async (req, res, next) => {
    const { firstName, lastName, address, city, state, phoneNum, email, startDate } = req.body;

    try {
        if (!firstName || !lastName || !address || !city || !state || !phoneNum || !email || !startDate) {
            throw new Error('Make sure all required information is entered')
        }

        const user = await Employee.create({ firstName, lastName, address, city, state, phoneNum, email, startDate });
        
        res.locals.users = user;
        return next();

    } catch (err) {
        return next({
            log: 'hr.Controller.addUser',
            message: { err : 'Could not add user', details: err.message }
        });
    }
};

hrController.updateUser = async (req, res, next) => {
    const input  = req.body;

    const { firstName, lastName } = req.query
    console.log('firstname lastname: ', firstName, lastName)

    try {
        if (!input || Object.keys(input).length === 0) {
            throw new Error('Please provide information to update');
        }

        console.log({input});
        
        const user = await Employee.findOneAndUpdate({ firstName, lastName }, input, { new: true });
        
        if (!user) throw new Error('Record not found');

        res.locals.users = user;
        return next();


    } catch (err) {
        return next({
            log: 'hrController.updateUser',
            message: { err: 'Could not update user', details: err.message }
        });
    }
};

hrController.verifyUser = async (req, res, next) => {
    console.log('verifyUser started');
    const { username, password } = req.body;

    try {
        if (!username) throw new Error('Please enter username');

        if (!password) throw new Error('Please enter password');

        const user = await Employee.findOne({ username, password });
        // console.log('user from verify: ', user)
        res.locals.users = user;

        if (user != null) return next();
        else res.send(504).redirect('/');

    } catch (err) {
        return next({
            log: 'hrController.verifyUser',
            message: {err: 'Could not verify user', details: err.message }
        });
    }
};


module.exports = hrController;