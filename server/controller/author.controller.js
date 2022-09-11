const Author = require('../models/author.model')

const AuthorController ={

//Create
create:(req,res)=>{
    Author.create(req.body)
    .then((author) =>{
        res.status(201).json({author:author})
    })
    .catch((err)=> {
        res.status(400).json({message:"Somthing Went Wrong!",error:err})

    })
},
//Read
getAll:(req,res)=>{
    Author.find({})
    .then((authors)=>{
        res.status(200).json({authors:authors})
    })
    .catch((err)=> {
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
},
getOne:(req,res)=>{
    Author.find({_id:req.params.id})
    .then((author)=>{
        res.status(200).json({author:author})
        })
        .catch((err)=>{
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
},
//Update
update:(req,res)=>{
    Author.find({_id:req.params.id})
    .findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((author)=>{
        res.status(200).json({author:author})
    })
    .catch((err) =>{
        res.status(400).json({message:"Somthing Went Wrong!",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Author.findOneAndDelete(req.params.id)
    .then((author)=>{
        res.status(200).json({author:author})
    })
    .catch((err) =>{
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
}

}
module.exports = AuthorController