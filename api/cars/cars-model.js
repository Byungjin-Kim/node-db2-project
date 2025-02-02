const db = require("../../data/db-config")

const getAll = () => {
  return db("cars");
}

const getById = (id) => {
  return db('cars').where('id', id).first();
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first();
}

const create = async (newCar) => {
  return await db('cars').insert(newCar)
    .then(([id]) => {
      return getById(id)
    })
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}
