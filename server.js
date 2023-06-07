// import all dependencies.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// import routes.
const routes = require('./routes/ToDoRoute');

// create express app and port.
const app = express();
const PORT = process.env.port || 5000;

//middleware
app.use(express.json());
app.use(cors());


// connect to MONGODB database.
mongoose.connect(process.env.MONGO_URI)
.then((req, res) => console.log(` Database is running on port: ${PORT}`))
.catch((err)=> console.log(err.message));

//use routes.
app.use(routes);


//listen to requests or connect to server.
app.listen(PORT, ()=> {
  console.log(`Server is connected on port:${PORT}`)
})
