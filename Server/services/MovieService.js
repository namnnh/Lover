const Movie = require('./../models').Movie;

const getList = async function () {
    let err;
    [err, movies] = await to(Movie.find().lean());
    if (err) TE(err);

    return movies;
}
module.exports.getList = getList;