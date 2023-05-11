const express = require('express');
const Car = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.json(cars);
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res,) => {
    res.json('Hello! You can do it!')
})

router.post('/', async (req, res,) => {
    res.json('Hello! You can do it!')
})

module.exports = router;