const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const db = require('./config/db');
// connect to db
db();

// port number
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use('/fithub', require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});