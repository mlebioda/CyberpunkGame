const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || "myuser",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "mydatabase",
  password: process.env.DB_PASSWORD || "mypassword",
  port: process.env.DB_PORT || 5432,
});


pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));

module.exports = pool;
