//import express

const express = require('express')

//import usercontroller
const usercontroller = require('./controllers/userController')

//add controller

const ProjectController = require('./controllers/projectController')

//import jwt middleware

const jwtMiddleware = require('./middleware/jwtMiddleware')

const multerConfig = require('./middleware/multerMiddleware')



//instance router

const router = new express.Router()

//REGISTER

router.post('/register',usercontroller.register)  //resolve function is in controller

//login
router.post('/login',usercontroller.login)

module.exports= router

//add-project
router.post('/add-project',jwtMiddleware,multerConfig.single("projectImage"),ProjectController.addProjectController)

//all project

router.get('/all-project',jwtMiddleware,ProjectController.getAllProjectController)

//home project
router.get('/home-project' , ProjectController.getHomeProjectController)

//user project

router.get('/user-project',jwtMiddleware , ProjectController.getUserProjectController)

//remove user project

router.delete('/remove-userproject/:id' , jwtMiddleware , ProjectController.removeUserProjectController)

//update user project

router.put('/update-userProject/:id', jwtMiddleware, multerConfig.single('projectImage'),ProjectController.editProjectController)

//update user profile
router.put('/update-userProfile',jwtMiddleware,multerConfig.single("profile"),usercontroller.editProfileController)

module.exports=router

