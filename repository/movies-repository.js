const repoBase = require('./repository-base');

const connectionString = "./data/movies.json"

exports.findAllMovies = () => {
  return repoBase.findAll(connectionString);
};

exports.findMovieById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.createMovie = (movie) => {
  return repoBase.create(connectionString, movie);
};

exports.updateMovie = (id, movie) => {
  return repoBase.update(connectionString, id, movie);
};

exports.deleteMovie = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};

exports.findAllMoviesByGenre = (genre) => {
  let movies = repoBase.findAll(connectionString);
  let moviesByCategory = movies.filter((movie) => {
    return movie.genre == genre;
  });
  return moviesByCategory;
};
