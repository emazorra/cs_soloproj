const express = require('express');
const app = express();
const path = require('path');

const hrController = require('../server/controllers/hrControllers.js');
// server/controllers/hrControllers.js

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use('/client', express.static(path.join(__dirname, '../client/build')));

// need route handlers


// routers for specific endpoints

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
});

app.post('/add', hrController.addUser, (req, res) => {
    res.status(200).send(res.locals.users);
});

app.patch('/update', hrController.updateUser, (req, res) => {
    res.status(200).send(res.locals.users);
})


app.use('*', (req, res) => {
    req.statusCode(404).send('Not Found')
});

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})


app.listen(8080, ()=> {
    console.log(`Server listening on port: ${PORT}...`)
});

module.exports = app;