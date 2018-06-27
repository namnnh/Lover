const Movie = require('../models').Movie;
const moment = require('moment');
const populateService   = require('./../services/populateService');
const movieService   = require('./../services/MovieService');

// Hardcode the days for the sake of simplicity
const days = ['Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D')];
// Same for the times
const times = ['9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM'];

const get = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err;
  [err,movies] = await to(movieService.getList());
  return ReS(res, { movies: movies });
}
module.exports.get = get;

const renderDb = async function (req, res) {
  let err,data;
  [err,count] = await to (populateService.renderMovies());
  return ReS(res, { message:'Create Successfully ' + count + ' Items' });;
}
module.exports.renderDb = renderDb;