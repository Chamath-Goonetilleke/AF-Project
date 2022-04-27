const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(cors());
app.use(bodyParser.json());

//route middleware
app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://vihanga:vihanga123@cluster0.sagyz.mongodb.net/merncrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{

    useNewUrlParser: true, 
    useUnifiedTopology: true

}).then(() => {

    console.log('DB connected');

}).catch((err) => {

    console.log("DB connection error" + err);

})

app.listen(PORT, () => {

    console.log('App is running on ' + PORT);

});


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
