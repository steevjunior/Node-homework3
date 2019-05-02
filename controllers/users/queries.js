const {users} = require('../../models/user')
const lodash = require('lodash')
const shortid = require('shortid')

const getUsers = () => {
    return users;
}

const updateUser = (id, data) => {
    const index = users.findIndex(user => user.id === id);
    let res = lodash.find(users,["email",data.email]);
    if(typeof(res) !=='undefined')
    {
      return 403;
    }else{
    users[index].name = data.name;
    users[index].email = data.email;
    return users;
    }
  }
  const createUser = data => {
    let res = lodash.find(users,["email",data.email]);
    if(typeof(res) !== 'undefined')
    {
      return 403;
    }
    else
    {
      data["id"] = shortid.generate();
      users.push(data);
      return users;
    }
   }

   const deleteUser =(id) =>{
    let res = lodash.findIndex(users,["id",id]);
    if(res !==-1){
      users.splice(res,1);
      return users;
    }else{
      return 404;
    }
  }


module.exports = {getUsers,updateUser,createUser,deleteUser}
