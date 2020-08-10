const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')

//connect code

mongoose.connect('mongodb+srv://sammy1:sammy1@cluster0.2ntus.mongodb.net/post?retryWrites=true&w=majority',{useNewUrlParser: true},(err, db) => {
    if(err) {
      console.log('Database error: ' + err);
    } else {
      useUnifiedTopology: true 
      console.log('Successful database connection');
    }
  });
//middleware
const app=express()
app.use(bodyParser.json())

app.use(cors())

const port=process.env.PORT || 5000
const route=require('./routes/api/posts')

app.use('/',route)
app.use('/',route)
app.use('/',route)
console.log('hu')
app.listen(port,()=>{
    console.log(`server started ${port}`)
})