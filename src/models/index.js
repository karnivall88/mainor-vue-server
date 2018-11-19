const fs = require('fs');
const path = require('path');
const Sequilize = require('sequelize');
const cfg = require('../config/config');
const db = {};

const sequelize = new Sequilize(cfg.db.database,cfg.db.user,cfg.db.password,cfg.db.options);
fs.readdirSync(__dirname).filter((file)=> file !== 'index.js').forEach((file)=>{
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model;
    });

    db.sequelize = sequelize;
    db.Sequilize = Sequilize;


    module.exports = db;



