const express = require('express');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
var cors = require('cors');

const app = express();



// Middleware
app.use(cors(
    {
        origin: ['http://localhost:3000'],
    }
));
app.use(express.json());


// Routes
app.use('/api', postRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
