export default {
  port: process.env.PORT || 3000,
  pg: {
    username: process.env.PG_USERNAME || '',
    password: process.env.PG_PASSWORD || '',
    host: process.env.PG_HOST || 'localhost',
    name: process.env.PG_NAME || 'simple-expressjs-development',
  },
};
