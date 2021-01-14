const Sequelize = require('sequelize');

module.exports = new Sequelize('project_yyc', 'root', 'masterofIT', {
    dialect: "mysql",
    host: "localhost"
})


// const sequelize = new Sequelize('project_yyc', 'root', 'masterofIT', {
//     dialect: "mysql",
//     host: "localhost"
// })
//
// const Location = require('../models/Location')(sequelize);
//
// module.exports = {
//     sequelize : sequelize,
//     location: Location
// }
