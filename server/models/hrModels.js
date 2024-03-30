const mongoose = require('mongoose');
const { array } = require('prop-types');

const MONGO_URI = 'mongodb+srv://emazorra1:uPPfRIUIH2y2iuUi@solocluster.uipeezf.mongodb.net/?retryWrites=true&w=majority&appName=SoloCluster'


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'employees'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log({ err }));
  
  const Schema = mongoose.Schema;

  const employeeSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    phoneNum: { type: Number, required: true },
    email: { type: String, required: true },
    startDate: { type: Number, required: true },
    // wage: { type: Number, required: true },
    // employType: { type: String, required: true },
  })

  const Employee = mongoose.model('employee', employeeSchema);

  module.exports = Employee;