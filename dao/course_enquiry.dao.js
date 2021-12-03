//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/courseenquiry');
var courseEnquiryDao={
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

function create(courseEnquiry){
    var newGig=new Gig(courseEnquiry);
    return newGig.save();
}

function updateGig(courseEnquiry,id,previous){
    var updateGig={
        course_name:courseEnquiry.course_name,
        enquiry_status:courseEnquiry.enquiry_status,
        previous_enquiry_status:previous,
        user_name:courseEnquiry.user_name,
        date:courseEnquiry.date,
        time:courseEnquiry.time
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=courseEnquiryDao