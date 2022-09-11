const AuthorController = require("../controller/author.controller")

const routes = (app)=> {

app.post("/api/authors",AuthorController.create);

//Read ALl
app.get('/api/authors',AuthorController.getAll);
//Read One
app.get('/api/authors/:id',AuthorController.getOne);
//Update
app.put('/api/authors/:id',AuthorController.update);
//Delete
app.delete('/api/authors/:id',AuthorController.delete);
}

module.exports = routes