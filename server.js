const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/db');
const bootcamps = require('./Router/boostcamp');

const app = express();

//Load env vars
dotenv.config({ path: './config/config.env' });

//connect to db
connectDB();

//Dev logging middleware
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

//Mount route
app.use('/api/v1/boostcamp', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server run in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);

// Handle unhandle promise reject
process.on('unhandleRejectio', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
