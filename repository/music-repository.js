const repoBase = require('./repository-base');

const connectionString = "./data/songs.json"

exports.findAllSongs = () => {
  return repoBase.findAll(connectionString);
};

exports.findSongById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.createSong = (song) => {
  return repoBase.create(connectionString, song);
};

exports.updateSong = (id, song) => {
  return repoBase.update(connectionString, id, song);
};

exports.deleteSong = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};