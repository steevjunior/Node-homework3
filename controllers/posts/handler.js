const {getposts,updatepost,createpost,deletepost,getpost} = require('./queries')

const getList = (req, res) =>{
    const posts = getposts()

    res.json({
        posts
    })
}


const getItemById = (req, res) =>{
  const post = getpost(req.params.id)
  if(post ===403){
    res.status(403).send('this id doesn t exist!!!!')
  }else{
  res.json({
      post
  })
}
}


const updateItem =  (req, res) => {
  const result = updatepost(req.params.id, req.body)
  if(result == 403){
    res.status(403).send('this id doesn t exist!!!!')
  }
  else{
    res.send(result)
  }
  
  }

  const createItem =  (req, res) => {
    const result = createpost(req.body)
    if(result == 404){
      res.status(404).send('this id is already used!!!!');
    }else{
      res.send(result)
    }
    
  }

  const deleteItem =  (req, res) => {
    const delresult = deletepost(req.params.id);
    if(delresult === 404){
      res.status(delresult).send("The id is not present!!!!!");
    }else{
      res.send(delresult);
    }  
  }


module.exports = {getList,updateItem,createItem,deleteItem,getItemById}