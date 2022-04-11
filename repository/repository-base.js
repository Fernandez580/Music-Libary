const {readFileSync, writeFileSync} = require('./json-context');


module.exports.findAll = (dataPath) => {
    return readFileSync(dataPath);
}
  
module.exports.findById = (dataPath, id) => {
    return readFileSync(dataPath)[id - 1];
}
  
module.exports.create = (dataPath, data) => {
    let jsonData = readFileSync(dataPath);
    const newObjectId = Object.keys(jsonData).length + 1;
    data = Object.assign({id: newObjectId}, data);
    jsonData[newObjectId - 1] = data;
    writeFileSync(dataPath, jsonData);
    return data;
}
  
module.exports.update = (dataPath, id, data) => {
    data = Object.assign({id: id}, data);
    let jsonData = readFileSync(dataPath);
    jsonData[data.id - 1] = data;
    writeFileSync(dataPath, jsonData);
    return data;
  }
  
  module.exports.deleteRecord = (dataPath, id) => {
    let jsonData = readFileSync(dataPath);
    let data = jsonData.filter((obj) => {
      return obj.id != id;
    });
    for (let i = 0; i < data.length; i++) {
      data[i].id = i + 1;
    }
    writeFileSync(dataPath, data);
    return data;
  }
