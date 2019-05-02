const {posts} = require('../../models/post')
const lodash = require('lodash')
const shortid = require('shortid')

const getposts = () => {
    return posts;
}

const getpost = (id) => {
  const index = posts.findIndex(post => post.id === id);
  if(index == -1)
  {
    return 403
  }else{
    return posts[index];
  }
   
}

const updatepost = (id, data) => {
    const index = posts.findIndex(post => post.id === id);
    if(index != -1){
      posts[index].content = data.content;
      posts[index].lastmodification=`${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`
      return posts;
  }else{
    return 403
  }
}
const createpost = data => {
      const index = posts.findIndex(post => post.id === data.id);
      if(index == -1){
        data.dateofcreation = `${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`
        data.lastmodification=`${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`
        posts.push(data);
        return posts;
      }
      else{
        return 404
      }
      
   }

const deletepost =(id) =>{
  let index = posts.findIndex(post => post.id == id)
  if(index!=-1){
    posts.splice(index,1)
    return posts
  }
  else{
    return 404
  }
  

}


module.exports = {getposts,updatepost,createpost,deletepost,getpost}
