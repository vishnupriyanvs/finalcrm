const Sequelize = require('sequelize');
const db=require('../config/database');

const Pagevisit=db.define('pagevisit',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        defaultValue:1
    },
    home_counter:{
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    course_counter:{
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    resource_counter:{
        type:Sequelize.INTEGER,
        defaultValue:0
    }
});

module.exports=Pagevisit;