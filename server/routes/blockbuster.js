let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

// need to connect with book model
let blockbuster = require('../models/blockbuster')
let blockbusterController = require('../controller/blockbuster')

/*CRUD Operation */
// Read operation 
// Get route for the book list 
router.get('/',blockbusterController.displayMovieList)

/*Perform add operation  */
/*Get route for displaying the ADD-Page -- Create Operation */
router.get('/add',blockbusterController.displayAddPage)

/*Post route for processing the ADD-Page -- Create Operation */
router.post('/add',blockbusterController.processAddPage)

/*Perform edit operation  */
/*Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',blockbusterController.displayEditPage)
/*Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id',blockbusterController.processEditPage)

/*Perform delete operation  */
/*Get to perform Delete Operation -- Deletion */
router.get('/delete/:id',blockbusterController.performDeletePage)

module.exports = router;