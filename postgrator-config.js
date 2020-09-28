require('dotenv').config();
const path = require('path')

module.exports = {
  migrationsDirectory: path.resolve(__dirname,'db/migrations'),
  driver: 'pg',
  connectionString:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_URL
      : process.env.DB_URL
};