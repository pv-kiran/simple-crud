const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const auth = (req,res,next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader)
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    return  res.status(StatusCodes.UNAUTHORIZED).send('Invalid token');
  } else {
      const token = authHeader.split(' ')[1];
      try {
         const payload = jwt.verify(token,process.env.JWT_SECRET );
         req.user = {
             userId: payload.userId,
             name: payload.name
         }
      } catch (err) {
          res.status(StatusCodes.UNAUTHORIZED).send('Invalid token')
      }
  }
  next();
}


module.exports = auth;