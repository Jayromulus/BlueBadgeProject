require('dotenv').config();

const express = require('express');
const app = express();
const sequelize = require('./db');
const bodyParser = require('body-parser');
const user = require('./controllers/usercontroller');
const route = require('./controllers/combocontroller')
sequelize.sync();

app.use(require('./middleware/headers'));
app.use(bodyParser.json());
app.use('/user', user);
app.use('/route', route);

app.listen(process.env.PORT, () => {console.log(`app listening on port ${process.env.PORT}`)});