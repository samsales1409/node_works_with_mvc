const express=require('express')
const mongoose=require('mongoose')
const router = express.Router();
var bodyParser = require('body-parser')
const posts=require('../../controller/post')
router.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
router.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
router.use(bodyParser.text({ type: 'text/html' }))

router.get('/api',function(req,res){
    res.send('hi')
})
router.post('/post',posts.create)
router.get('/post',posts.getAll)
router.delete('/post',posts.deletePost)

module.exports=router


