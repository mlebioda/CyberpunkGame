const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const pool = require('./db'); // Ensure you have a db.js file exporting the pool

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });
/*
let sessions = {};

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinSession", ({ sessionId, user }) => {
        if (!sessions[sessionId]) {
            sessions[sessionId] = { users: [], gameMaster: null, phase: 1 };
        }

        sessions[sessionId].users.push(user);
        if (!sessions[sessionId].gameMaster) {
            sessions[sessionId].gameMaster = user; // First user is GM
        }

        io.emit("updateSession", sessions[sessionId]);
    });

    socket.on("startGame", (sessionId) => {
        if (sessions[sessionId]) {
            sessions[sessionId].phase = 1;
            io.emit("gameStarted", sessions[sessionId]);
        }
    });

    socket.on("nextPhase", (sessionId) => {
        if (sessions[sessionId]) {
            sessions[sessionId].phase++;
            io.emit("phaseUpdated", sessions[sessionId]);
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});
*/
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to PostgreSQL:', res.rows[0]);
    }
});

server.listen(3000, () => console.log("Server running on port 3000"));
