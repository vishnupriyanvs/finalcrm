//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/resourceenquiry');
var resourceEnquiryDao={
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

function create(resourceEnquiry){
    var newGig=new Gig(resourceEnquiry);
    return newGig.save();
}

function updateGig(resourceEnquiry,id,previous){
    var updateGig={
        resource_name:resourceEnquiry.resource_name,
        enquiry_status:resourceEnquiry.enquiry_status,
        previous_enquiry_status:previous,
        user_name:resourceEnquiry.user_name,
        date:resourceEnquiry.date,
        time:resourceEnquiry.time
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=resourceEnquiryDao