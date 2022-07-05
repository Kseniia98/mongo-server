const createError = require('http-errors');
const yup = require('yup');

const createUserSchema = yup.object().shape({
  firstname: yup.string().required().min(2),
  lastname: yup.string().required().min(2),
  email: yup.string().email().required().min(6),
  password: yup.string().required().min(6),
  dob: yup.date().required()
});

module.exports.createUserMiddleWare = async(req, res, next) => {
  try{
    const data = req.body;
    const valid = await createUserSchema.isValid(data);
    
    if(!valid){
      throw createError(400, 'Invalid data')
    }
      next();
    } catch (error){
      next(error);
    }
};

const updateUserSchema = yup.object().shape({
  firstname: yup.string().min(2),
  lastname: yup.string().min(2),
  email: yup.string().email().min(6),
  password: yup.string().min(6),
  dob: yup.date()
});

module.exports.updateUserMiddleWare = async(req, res, next) => {
  try{
    const data = req.body;
    const valid = await updateUserSchema.isValid(data);
    
    if(!valid){
      throw createError(400, 'Invalid data')
    }
      next();
    } catch (error){
      next(error);
    }
};

const createUserParamsSchema = yup.string().required().min(24).max(24)

module.exports.paramsUserMiddleWare = async(req, res, next) => {
  try {
    const data = req.params.id;
    const valid = await createUserParamsSchema.isValid(data);

    if(!valid){
      throw createError(400, 'Invalid params')
    }
      next();
  } catch (error) {
    next(error);
  }
}