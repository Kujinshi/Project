const Sequelize = require('sequelize');
const db = require('../db/index');


 const Location = db.define('location',
     {
        id:  {
           type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
         },
        city:  {
            type: Sequelize.STRING,
            allowNull: false
         },
         street:  {
             type: Sequelize.STRING,
             allowNull: false
         },
         address:  {
             type: Sequelize.STRING,
             allowNull: false
         },
         postal_code:  {
             type: Sequelize.STRING,
             allowNull: false
         },
         email:  {
             type: Sequelize.STRING,
             allowNull: false
         },
         phones:  {
             type: Sequelize.STRING,
             allowNull: false
         },
         url:  {
             type: Sequelize.STRING
         }
     }, {
         timestamps: false,
         tableName: 'location'
     });

 module.exports = Location;

//
// Первый метод
//

// module.exports = function (sequelize) {
//     return sequelize.define('location', {
//         id:  {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false
//         },
//         city:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         street:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         address:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         postal_code:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         email:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         phones:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         url:  {
//             type: Sequelize.STRING
//         }
//     }, {
//         timestamps: false,
//         tableName: 'location'
//     })
// }