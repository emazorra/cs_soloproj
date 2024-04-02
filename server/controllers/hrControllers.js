const Employee = require('../models/hrModels');
const path = require('path');
const hrController = {};

hrController.addUser = async (req, res, next) => {
    const { firstName, lastName, address, city, state, phoneNum, email, startDate } = req.body;

    try {
        if (!firstName || !lastName || !address || !city || !state || !phoneNum || !email || !startDate) {
            return res.redirect('/');
        }

        const user = await Employee.create({ firstName, lastName, address, city, state, phoneNum, email, startDate });

        res.locals.users = user;
        return next();

    } catch (err) {
        return next({
            log: 'hr.Controller.addUser',
            message: { err : 'Could not add user' }
        });
    }
};

hrController.updateUser = async (req, res, next) => {
    const input  = req.body;

    const { firstName, lastName } = req.params

    try {
        if (!input) {
            return alert('Please enter information to update');
        }
        console.log({input});

        
        return next();


    } catch (err) {
        return next({
            log: 'hr.Controller.updateUser',
            message: { err: 'Could not update user'}
        });
    }
};


module.exports = hrController;