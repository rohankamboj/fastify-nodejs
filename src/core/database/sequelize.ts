import { Sequelize } from 'sequelize';
import { databaseConfig } from './config';
const env = process.env.NODE_ENV || 'development';
const config = databaseConfig[env as keyof typeof databaseConfig];

console.log({
  config,
});

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);
