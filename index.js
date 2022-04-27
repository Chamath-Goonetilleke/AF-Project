const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(require("./routes/staff"));
app.use(require("./routes/chat"));

io.on("connection", (socket) => {
  socket.on("create", function (room) {
    socket.join(room);
  });
  socket.on("send_message", function (msg) {
    io.emit("send_message", msg);
  });
});

app.use(express.json());

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server has started on port number ${PORT}`);
});
