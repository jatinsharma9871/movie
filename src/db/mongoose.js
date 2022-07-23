// /Users/jatin/mongodb/bin/mongod.exe --dbpath=/Users/jatin/mongodb-data
const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true); 

mongoose.connect("mongodb+srv://jatin:jatin@cluster0.9edpm.mongodb.net/test")
