const createHttpError = require('http-errors');
const { User } = require('../db/');

class UserService {
  createUser = async (data) => {
    const result = await User.create(data);
      
    return result;
  };

  getUserList = async (filter) => {
    const foundUsers = await User.find(filter);

    if(foundUsers.length === 0){
      throw createHttpError(404, 'Users not found')
    }
      
    return foundUsers;
  };

  getUserById = async (userId) => {  
    const user = await User.findOne({_id: userId});
  
    if(!user){
      throw createHttpError(404, 'User not found')
    }
  
    return user;
  };

  findByEmail = async (emailFilter) => {
    const results = await User.findOne({email: emailFilter});

    return results;
  };


  updateUserById = async (id, data) => {
    const newUser = await User.findOneAndUpdate(
      {_id: id},
      {$set: {...data}
      },
      {   
        returnDocument: "after"
      }
    );

    return newUser.value;
  };

  deleteUserById = async (id) => {
    const deletedUser = await User.findOneAndDelete({ _id: id});
    
    if(deletedUser.value === null){
      throw createHttpError(404, 'User not found')
    }

    return deletedUser.value;
  };
}

module.exports = new UserService();