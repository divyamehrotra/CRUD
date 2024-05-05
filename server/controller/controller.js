var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res) =>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.status,
        status: req.body.status
    })

    // save user in database
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            }); 
        })
}

// retrieve and return users/user
exports.find = (req,res) =>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error occurred while retrieving user information"})
    })
}
// update a new identified user by user id
exports.update = (req,res) =>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }
    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot update user with ${id}. Maybe user not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error in update information"})
    })
}
// delete a user with specified user id
exports.delete = (req,res) =>{
    const id = req.params.id
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with ${id}. Check id`})
        }
        else{
            res.send({message:"User information deleted"})
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error in deleting user information"})
    })
}