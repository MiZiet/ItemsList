const initialData = "./data.json";
let database = require(initialData);

const getNewId = require("./lib/getNewId");

const getData = () => {
  return new Promise((resolve) => {
    resolve(database);
  });
};

const addData = (data) => {
  const id = { id: getNewId(database) };
  return new Promise((resolve) => {
    database.push({ ...id, ...data });
    resolve(true);
  });
};

const deleteData = (data) => {
  return new Promise((resolve, reject) => {
    const index = database.findIndex((item) => item.id == data);

    if (index != -1) {
      database.splice(index, 1);
      resolve(true);
    } else {
      reject(false);
    }
  });
};

module.exports = {
  getData,
  addData,
  deleteData,
};
