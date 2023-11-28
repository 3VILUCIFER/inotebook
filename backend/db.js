const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=>{
        console.log('Connect to Mongo Succesfully')
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectToMongo;
