const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

// Database connection
sequelize.sync()
    .then(() => {
        console.log('Connected to MySQL');
        app.listen(8080, () => {
            console.log('Server is running on port 8080');
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
