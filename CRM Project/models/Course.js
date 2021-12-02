const Sequelize = require('sequelize');
const db=require('../config/database');

const Course=db.define('course',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user_name:{
        type:Sequelize.STRING,
    },
    course_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    course_fee:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    duration:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    criteria:{
        type:Sequelize.STRING,
        allowNull:false
    },
    course_image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.DATEONLY
    },
    time:{
        type:Sequelize.DATE
    },
    status:{
        type:Sequelize.STRING,
        allowNull:false
    },
    previous_status:{
        type:Sequelize.STRING
    }
});

module.exports=Course;