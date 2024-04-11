const express = require("express");
const app = express();
const socket = require("./socket");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/hello", (req, res) => {
  socket.getSocket().emit("hello", { message: "Hello from the server!" });
  res.send("Saying Hello to the connected people!");
});

const server = app.listen(3000);
const socketInit = require("./socket").init(server);
socketInit.on("connection", (socket) => {
  console.log("New user connected");
});
