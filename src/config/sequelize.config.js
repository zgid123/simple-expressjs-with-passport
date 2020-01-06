module.exports = {
  development: {
    host: 'localhost',
    dialect: 'postgres',
    database: 'simple-expressjs-development',
  },
  test: {
    host: 'localhost',
    dialect: 'postgres',
    database: 'simple-expressjs-test',
  },
  production: {
    dialect: 'postgres',
    host: process.env.PG_HOST,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE || 'simple-expressjs-production',
  },
};
