const createHttpError = require('http-errors');
const userModel = require('../db/models/user');
const { ObjectId } = require('mongodb');

class UserService {
  createUser = async (data) => {
    const User = userModel();
    const result = await User.insertOne(data);
      
    return result.insertedId;
  };

  getUserList = async () => {
    const User = userModel();
    const foundUsers = await User.find().toArray();

    if(foundUsers.length === 0){
      throw createHttpError(404, 'Users not found')
    }
      
    return foundUsers;
  };

  getUserById = async (userId) => {  
    const User = userModel();
    const user = await User.findOne({_id: ObjectId(userId)});
  
    if(!user){
      throw createHttpError(404, 'User not found')
    }
  
    return user;
  };

  updateUserById = async (id, data) => {
    const User = userModel();

    const newUser = await User.findOneAndUpdate(
      {_id: ObjectId(id)},
      {$set: {...data}
      },
      {   
        returnDocument: "after"
      }
    );

    return newUser.value;
  };

  deleteUserById = async (id) => {
    const User = userModel();
    const deletedUser = await User.findOneAndDelete({ _id: ObjectId(id) });
    
    if(deletedUser.value === null){
      throw createHttpError(404, 'User not found')
    }

    return deletedUser.value;
  };
}

module.exports = new UserService();