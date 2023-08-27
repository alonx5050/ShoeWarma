const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createServer } = require('http');
const { Server } = require('socket.io');

// App + Server
const app = require('./app');
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: '*',
});

// Enable config.env file
dotenv.config({ path: './config.env' });


// Start Server
const port = process.env.PORT;
httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});