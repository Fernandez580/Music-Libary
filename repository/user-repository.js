const repoBase = require('./repository-base');

const connectionString = "./data/users.json"

exports.findAllUsers = () => {
  return repoBase.findAll(connectionString);
};

exports.findUserById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.createUser = (user) => {
  return repoBase.create(connectionString, user);
};

exports.updateUser = (id, user) => {
  return repoBase.update(connectionString, id, user);
};

exports.deleteUser = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};
