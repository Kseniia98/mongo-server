const { createUser, updateUserById, deleteUserById, getUserById, getUserList } = require("../services/user.service");

class UserController {

  createUser = async (req, res, next) => {
    try {
      const data = req.body;
      const createdUser = await createUser(data)

      res.status(200).send({ data: createdUser })
    } catch (error) {
      next(error)
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const data = req.body;
      const id = req.params.id;

      const updatedUser = await updateUserById(id, data);
      res.status(200).send({data: updatedUser});
  } catch (error) {
    next(error)
  }
  };

  deleteUser = async (req, res, next) => {
    try {
    const id = req.params.id;

    const deletedUser = await deleteUserById(id);
    res.status(200).send({data: deletedUser});
  } catch (error) {
    next(error)
  }
  };

  getUserById = async (req, res, next) => {
    try {
    const id = req.params.id;
  
    const foundUser = await getUserById(id)

    res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error)
  }
  };

  getUserList = async (req, res, next) => {
    try {  
    const userList = await getUserList();
  
    res.status(200).send({ data: userList });
  } catch (error) {
    next(error)
  }
  };
}

module.exports = new UserController();