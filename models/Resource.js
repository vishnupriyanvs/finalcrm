const Sequelize = require('sequelize');
const db=require('../config/database');

const Resource=db.define('resource',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    resource_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    resource_rent:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    duration:{
        type:Sequelize.STRING,
        allowNull:false
    },
    picture:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=Resource;