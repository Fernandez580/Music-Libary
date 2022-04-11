const repoBase = require('./repository-base');

const connectionString = "./data/products.json"

exports.findAllProducts = () => {
  return repoBase.findAll(connectionString);
};

exports.findProductById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.createProduct = (product) => {
  return repoBase.create(connectionString, product);
};

exports.updateProduct = (id, product) => {
  return repoBase.update(connectionString, id, product);
};

exports.deleteProduct = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};