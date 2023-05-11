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
        vin: '11111111111112',
        make: 'Hyundai',
        model: 'Palisade',
        mileage: 21000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1111111111113',
        make: 'Jeep',
        model: 'Grand Cherokee L',
        mileage: 31000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '2111111111111',
        make: 'Honda',
        model: 'Pilot',
        mileage: 13100,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '3111111111111',
        make: 'Mazda',
        model: 'CX-9',
        mileage: 33000,
        title: 'clean',
        transmission: 'automatic'
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