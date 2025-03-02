const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'db',
  database: process.env.POSTGRES_DB || 'cyberpunkgame',
  password: process.env.POSTGRES_PASSWORD || 'example',
  port: process.env.POSTGRES_PORT || 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to PostgreSQL:', res.rows[0]);
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
