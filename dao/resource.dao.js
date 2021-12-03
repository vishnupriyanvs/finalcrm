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
        
        resource_name:resource.resource_name,
        resource_rent:resource.resource_rent,
        duration:resource.duration,
        picture:resource.picture,
        description:resource.description,
        
        
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=resourceDao