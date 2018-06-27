const express = require('express');
const router = express.Router();

const UserController = require('./../controllers/UserController');
const MovieController = require('./../controllers/movieController');

// const custom 	        = require('./../middleware/custom');

const passport = require('passport');
const path = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Parcel Pending API", data: { "version_number": "v1.0.0" } })
});

router.post('/users', UserController.create);                                                    // C
router.get('/users', passport.authenticate('jwt', { session: false }), UserController.get);        // R
router.put('/users', passport.authenticate('jwt', { session: false }), UserController.update);     // U
router.delete('/users', passport.authenticate('jwt', { session: false }), UserController.remove);     // D
router.post('/users/login', UserController.login);

router.get('/movies', passport.authenticate('jwt', { session: false }), MovieController.get);  
router.get('/render-movies', MovieController.renderDb);  



module.exports = router;