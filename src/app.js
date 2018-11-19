const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cfg = require('./config/config');
const {sequelize} = require('./models');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

sequelize.sync({force:false}).then(()=>{

    app.listen(cfg.port);
    console.log(`Server statrted at port: ${cfg.port}`);
});



