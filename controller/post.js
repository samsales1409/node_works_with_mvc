

const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();
const sch=require('../schema/sch')

const post1=sch

 function create(req,res){
    console.log('post')
    console.log(req.body.name)
    const post=new sch({
        _id:mongoose.Types.ObjectId(),
        name:req.body.name,
        content:req.body.content
    })
    return post
    .save()
    .then((newpost) => {
      return res.status(201).json({
        success: true,
        message: 'New post created successfully',
        post: newpost,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });

}

//Select all
function getAll(req,res){
  post1.find({},function(err,posts1){
    if(err){
      console.log('wrong');
     
    }
    res.json(posts1);
  })
}

//update

function updatePost(req,res){
  post1.find(req.body.name)
    .then(result=>{
      result.content=req.body.name
    })
}
// Deleting post
function deletePost(req,res){
  let name=req.body.name;
  console.log(name)
  post1.deleteMany({ name:`${name}` } ,function(err){
    if(err){
      console.log(err)
    }
    else{
      res.send('success delete')
    }
  })
}
module.exports={create,getAll,deletePost}