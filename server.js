const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const port = process.env.PORT || 3000;
const authentication = require('./middleware/authentication')


// swagger documentation configuration
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Job API',
      version: '1.0.0',
      description: 'A simple job api'
    },
    servers: [
      {
          url: "http://localhost:3000"
      }
    ] ,
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    },
    security: [{
      jwt: []
    }]
  },
  apis: ["swagger.js"]
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

// router setup
const auth = require('./router/auth');
const job = require('./router/job');

app.use('/api/auth' , auth);
app.use('/api/job',authentication, job);




// mongodb conection setup
const connectDB = require('./db/connect'); 
const start = async (url) => {
    try {
        await connectDB(url);
        console.log('Connected to mongo db');
        app.listen(port , () => {
            console.log(`Server is listening at ${port}`)
        })
    } catch (err) {
        console.log(err);
    }
    
}


start(process.env.MONGO_URI)