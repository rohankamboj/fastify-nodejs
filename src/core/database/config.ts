import { Dialect } from 'sequelize';

export const databaseConfig = {
  development: {
    username: process.env.DB_USERNAME || 'rohan',
    password: process.env.DB_PASSWORD || 'rohan-morph',
    database: process.env.DB_NAME || 'morph-test',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres' as Dialect,
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres' as Dialect,
  },
  production: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    dialect: 'postgres' as Dialect,
  },
};
