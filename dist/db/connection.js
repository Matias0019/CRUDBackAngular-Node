"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('productsnodedb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3307
});
// const sequelize = new Sequelize('productsnodedb', 'root', 'Acdcmatias14', {
//   host: 'localhost',
//   dialect: 'mysql'
// });
// const sequelize = new Sequelize('mariadb://localhost:3307/productsnodedb?useSSL=false&serverTimezone=UTC')
exports.default = sequelize;
