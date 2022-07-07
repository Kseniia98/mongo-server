const createError = require('http-errors');
const yup = require('yup');

const createUserSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  address: yup.object({
    city: yup.string().required(),
    country: yup.string()
  }),
  createdAt: yup.date()
});

module.exports.createUserMiddleWare = async(req, res, next) => {
  try{
      const data = req.body;
      await createUserSchema.validate(data);
    
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
