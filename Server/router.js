import express, { Router } from 'express';
// Import index action from movies controller
var movieController = require('./controllers/movieController');
var userController = require('./controllers/userController');
var authController = require('./controllers/auth');

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/movies')
  .get(movieController.getMovies);

router.route('/users')
  .get(authController.isAuthenticated,userController.getUsers)
  .post(userController.postUsers);

export default router;