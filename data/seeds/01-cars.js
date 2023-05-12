// STRETCH
const cars = [
    {
        vin: '1YVHP80D955M11739',
        make: 'Kia',
        model: 'Telluride',
        mileage: 12000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1ZVFT80N355163289',
        make: 'Hyundai',
        model: 'Palisade',
        mileage: 21000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '3GNBABFW0BS510915',
        make: 'Jeep',
        model: 'Grand Cherokee L',
        mileage: 31000,
        transmission: 'automatic'
    },
    {
        vin: '1HGCM56323A085732',
        make: 'Honda',
        model: 'Pilot',
        mileage: 13100,
    },
    {
        vin: '1FMNU43S61ED04707',
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