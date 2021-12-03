const Sequelize = require('sequelize');
const db=require('../config/database');

const CourseEnquiry=db.define('CourseEnquiry',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    course_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    user_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    enquiry_status:{
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue:"pending"
    },
    previous_enquiry_status:{
        type:Sequelize.STRING
    },
    date:{
        type:Sequelize.DATEONLY
    },
    time:{
        type:Sequelize.STRING
    }
});

module.exports=CourseEnquiry;