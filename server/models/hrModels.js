const mongoose = require('mongoose');
const { array } = require('prop-types');
require('dotenv').config();

const myURI = process.env.MYURI;
const MONGO_URI = myURI;


mongoose.connect(MONGO_URI, {
    dbName: 'employees'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log({ err }));
  
  const Schema = mongoose.Schema;

  const employeeInfoSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    phoneNum: { type: Number, required: true },
    email: { type: String, required: true },
    startDate: { type: String, required: true },
    // front end doesn't have to serve all this hunty
    wage: { type: Number, required: true },
    employType: { type: String, required: true },
  });

  const EmployeeInfo = mongoose.model('EmployeeInfo', employeeInfoSchema);

  const loginInfoSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });

  const LoginInfo = mongoose.model('LoginInfo', loginInfoSchema);

  const roleSchema = new Schema({
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
      default: 'user'
    }
  });

  //need docs schema

  const Role = mongoose.model('Role', roleSchema);

  const employeeSchema = new Schema({
    employeeInfo: { 
      type: Schema.Types.ObjectId,
      ref: 'EmployeeInfo',
      required: true
    },
    loginInfo: {
      type: Schema.Types.ObjectId,
      ref: 'LoginInfo',
      required: false,
      default: null
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true
    }
  })

  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = { Employee, EmployeeInfo, LoginInfo, Role };