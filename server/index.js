const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT || 8000;

const userRoute = require('./src/routes/user');
const ticketRoute = require('./src/routes/ticket');
const authRoute = require('./src/routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/ticket', ticketRoute);
app.use('/auth', authRoute);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);