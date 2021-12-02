//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/course');
var courseDao={
    findAll:findAll,
    create:create,
    findById: findById,
    deleteById: deleteById,
    updateGig:updateGig
}

function findAll(){
    return Gig.findAll();
}

function findById(id){
    return Gig.findByPk(id);
}

function deleteById(id){
    return Gig.destroy({where:{id:id}});
}

function create(course){
    var newGig=new Gig(course);
    return newGig.save();
}

function updateGig(course,id){
    var updateGig={
        course_name:course.course_name,
        user_name:course.user_name,
        course_fee:course.course_fee,
        duration:course.duration,
        criteria:course.criteria,
        course_image:course.course_image,
        date:course.date,
        time:course.time,
        status:course.status,
        previous_status:course.previous_status
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=courseDao