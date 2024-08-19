const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const postRoutes = require('./routes/posts');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());
app.use(cors());

//Connected to MongoDB
mongoose.connect('mongodb://localhost:27017/blog')
.then(() => console.log('MongoDB Connected'))
.catch(err =>console.log('DB error',err));

//use routes
app.use('/api/posts',postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
