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
        type:Sequelize.INTEGER,
        allowNull:false
    },
    picture:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=Resource;