const {getUsers,updateUser,createUser,deleteUser} = require('./queries')

const getList = (req, res) =>{
    const users = getUsers()

    res.json({
        data : users
    })
}

const updateItem =  (req, res) => {
  const users = getUsers()
    const result = updateUser(req.params.id, req.body)
    if(result === 403)
    {
      res.status(403).send("the mail already exist!!")
    }
    else{
      res.send(users)
    }
    
  }

  const createItem =  (req, res) => {
    const result = createUser(req.body)
    if(result === 403){
      res.status(403).send("This email is already used!!!")
    }
    else{
      res.send(result)
    }
  }

  const deleteItem =  (req, res) => {
    const delresult = deleteUser(req.params.id);
    if(delresult === 404){
      res.status(delresult).send("The id is not present!!!!!");
    }else{
      res.send(delresult);
    }  
  }


module.exports = {getList,updateItem,createItem,deleteItem}