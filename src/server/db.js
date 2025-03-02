const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || "cyberpunk",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "cyberpunkdb",
  password: process.env.DB_PASSWORD || "cyberpunkpassword",
  port: process.env.DB_PORT || 5432,
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));

module.exports = pool;
