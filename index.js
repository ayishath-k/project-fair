//import dotenv

require('dotenv').config()

//import express

const express = require('express')

//import cors

const cors = require('cors')

//import router

const router = require('./router')

//import connect

require('./connection')

//create server

const pfserver = express()

//server using cors

pfserver.use(cors())

//parse the data
//middleware

pfserver.use(express.json())

//use router

pfserver.use(router)

//exporting upload folder

pfserver.use('/upload' , express.static('./uploads'))

//port

const PORT = 4000 || process.env.PORT

//listen

pfserver.listen(PORT,()=>{
    console.log(`server running succesfully at port number ${PORT}`);
    
})

// get request

// pfserver.get('/' ,(req,res)=>{
//     res.send('get request received')

// })

//delete

pfserver.post('/' ,(req,res)=>{
    // res.send('post request received')

})

