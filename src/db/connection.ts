import { Sequelize } from "sequelize";

const sequelize = new Sequelize('productsnodedb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3307
  });

  export default sequelize;