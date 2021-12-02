const Sequelize = require('sequelize');
const db=require('../config/database');

const Resource=db.define('resource',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    batch_id:{
        type:Sequelize.INTEGER,
        allowNull:false
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
    availability:{
        type:Sequelize.STRING,
        allowNull:false
    },
    previous_availability:{
        type:Sequelize.STRING
    },
    picture:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    user_name:{
        type:Sequelize.STRING
    },
    date:{
        type:Sequelize.DATEONLY
    },
    time:{
        type:Sequelize.STRING
    }

});

module.exports=Resource;