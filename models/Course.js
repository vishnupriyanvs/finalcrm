const Sequelize = require('sequelize');
const db=require('../config/database');

const Course=db.define('course',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
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
    }
});

module.exports=Course;