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
  console.log("il y a un nouveau client");
  connection.on("modifPixel", function (data) {
    console.log(data);
  });
});

server.listen(3000, () => {
  console.log("hello world");
});
