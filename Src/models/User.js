const  Sequelize = require('sequelize');
// const db = require('../db/index');
const sequelize = require('../db/index');

const User = sequelize.define('user',
    {
        id:  {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstname:  {
            type: Sequelize.STRING,
            allowNull: false
        },
        middlename:  {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastname:  {
            type: Sequelize.STRING,
            allowNull: false
        },
        birthday:  {
            type: Sequelize.DATE,
            allowNull: true
        },
        status:  {
            type: Sequelize.STRING,
            allowNull: false
        },
        email:  {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            required: true
        },
        password:  {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },
        phones:  {
            type: Sequelize.STRING,
            allowNull: true
        },
        photo:  {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        created:  {
            type: Sequelize.DATE,
            allowNull: false
        },
        modified:  {
            type: Sequelize.DATE,
            allowNull: false
        },
        lastaccess:  {
            type: Sequelize.DATE,
            allowNull: false
        }

    }, {
        timestamps: true,
        tableName: 'user'
    });

module.exports = User;


// const {Sequelize, model, types} = require('sequelize');
// const db = require('../db/index');
//
//
// const schema = db.define('user',
//     {
//         id:  {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false
//         },
//         firstname:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         middlename:  {
//             type: Sequelize.STRING,
//             allowNull: true
//         },
//         lastname:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         birthday:  {
//             type: Sequelize.DATE,
//             allowNull: true
//         },
//         status:  {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         email:  {
//             type: Sequelize.STRING,
//             unique: true,
//             allowNull: false,
//             required: true
//         },
//         password:  {
//             type: Sequelize.STRING,
//             allowNull: false,
//             required: true
//         },
//         phones:  {
//             type: Sequelize.STRING,
//             allowNull: true
//         },
//         photo:  {
//             type: Sequelize.INTEGER,
//             allowNull: true
//         },
//         created:  {
//             type: Sequelize.DATE,
//             allowNull: false
//         },
//         modified:  {
//             type: Sequelize.DATE,
//             allowNull: false
//         },
//         lastaccess:  {
//             type: Sequelize.DATE,
//             allowNull: false
//         }
//
//     }, {
//         timestamps: true,
//         tableName: 'user'
//     });
//
// module.exports = model('User', schema);