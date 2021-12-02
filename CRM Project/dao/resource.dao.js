//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/resource');
var resourceDao={
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
        batch_id:resource.batch_id,
        resource_name:resource.resource_name,
        resource_rent:resource.resource_rent,
        duration:resource.duration,
        availability:resource.availability,
        previous_availability:resource.previous_availability,
        picture:resource.picture,
        description:resource.description,
        user_name:resource.user_name,
        date:resource.date,
        time:resource.time
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=resourceDao