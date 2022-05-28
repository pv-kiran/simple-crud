const {StatusCodes} = require('http-status-codes');
const User = require('../model/User');

const userRegistration = async (req,res) => {
    const {name,password,email} = req.body; 
    if(!name || !email || !password) {
      res.status(StatusCodes.BAD_REQUEST).send('Please provide a valid name , email ,password');
    }
    try {
        const user = await User.create(req.body);
        // const token = user.genToken();
        if(!user) {
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong');
        }
        res.status(StatusCodes.CREATED).json({
          message: 'User created successflly',
          name: user.name ,
          email: user.email  
          // token: token
        });
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send(err.message);
    }
}

const userLogin = async (req,res) => {
  const { email , password } = req.body;
  // console.log(typeof password)
  // console.log((typeof password) !== 'string');
  if(!email || !password || (typeof password) !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST).send('Please provide a valid email and password');
  }
  
  
  const user = await User.findOne({
    email: email 
  })
  if(!user) {
    return res.status(StatusCodes.BAD_REQUEST).send('Invalid credentials');
  } 
  const isPasswordCorrect = await user.checkUser(password);
  if(isPasswordCorrect) {
    const token = user.genToken();
    res.status(StatusCodes.OK).json({
      user: {
        name: user.name,
        email: user.email
      } ,
      token: token
    })
  } else {
    res.status(StatusCodes.BAD_REQUEST).send('Invalid credentials');
  }
}

module.exports = {
    userRegistration ,
    userLogin
}