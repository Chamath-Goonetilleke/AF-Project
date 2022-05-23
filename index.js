const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()

const app = express();

//import routes
const topicRoutes = require('./routes/topics');

//app middleware
app.use(cors());
app.use(bodyParser.json());

//route 
app.use(topicRoutes);

const PORT = process.env.PORT || 8080;
const URL = process.env.DB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log("DB connected!!!");
  })
  .catch((err) => {
      console.log (`DB connection error: ${err}`);
  })

  const server = app.listen(PORT, () => {

    console.log(`App is running on: ${PORT}`);

});

module.exports = server;


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration