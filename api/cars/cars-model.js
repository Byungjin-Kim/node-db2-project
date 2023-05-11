const db = require("../../data/db-config")

const getAll = () => {
  let allCars = db("cars");
  return allCars;
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create

}
