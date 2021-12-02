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

function create(resource){
    var newGig=new Gig(resource);
    return newGig.save();
}

function updateGig(resource,id){
    var updateGig={
        resource_name:resource.resource_name,
        enquiry_status:resource.enquiry_status,
        previous_enquiry_status:resource.previous_enquiry_status,
        user_name:resource.user_name,
        date:resource.date,
        time:resource.time
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=resourceEnquiryDao