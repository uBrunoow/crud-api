var Userdb = require('../models/model');

// create and save new user
exports.create = async (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });

    // save user in the database
    try {
        const newUser = await user.save();
        res.status(201).json({ msg: "🟢 Usuário criado com sucesso!", user: newUser });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedUser = await Userdb.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
        }

        // Chamada para atualizar os contadores após a exclusão
        await Userdb.updateCountersAfterDelete(deletedUser.counter)

        res.send({
            message: "User was deleted successfully!"
        });
    } catch (err) {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    }
}