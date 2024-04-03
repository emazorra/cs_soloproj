const Employee = require('../models/hrModels');
const path = require('path');
const hrController = {};

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
            log: 'hr.Controller.updateUser',
            message: { err: 'Could not update user', details: err.message }
        });
    }
};

hrController.verifyUser = async (req, res, next) => {

};


module.exports = hrController;