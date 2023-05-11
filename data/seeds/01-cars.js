// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'Kia',
        model: 'Telluride',
        mileage: 12000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1111111111112',
        make: 'Hyundai',
        model: 'Palisade',
        mileage: 21000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '111111111113',
        make: 'Jeep',
        model: 'Grand Cherokee L',
        mileage: 31000,
        transmission: 'automatic'
    },
    {
        vin: '211111111111',
        make: 'Honda',
        model: 'Pilot',
        mileage: 13100,
    },
    {
        vin: '311111111111',
        make: 'Mazda',
        model: 'CX-9',
        mileage: 33000,
        title: 'clean',
    },
]

// exports.seed = function (knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}