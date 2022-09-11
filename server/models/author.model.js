const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName:{ type:String,
                required:[true,"Author Name is required"],
                minLength:[3,"Name must be longer than 2 characters"]
        },
},
    {timestamps:true})

const Author = mongoose.model("Author",AuthorSchema)

module.exports = Author