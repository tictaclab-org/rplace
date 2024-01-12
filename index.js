const PORT = process.env.PORT || 3000;

const express = require("express");
const http = require("http");
const socket = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (connection) => {
  console.log(`New Client: ${connection.id}`);
  connection.on("modifPixel", function ({spanId, color}) {
    console.log(`New Message Received: ${spanId} - ${color}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
