"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('productsnodedb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3307
});
exports.default = sequelize;
