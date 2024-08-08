const express = require("express");

const kodersRouter = require("./routes/koders.routes");
const mentorsRouter = require("./routes/mentors.routes");

const app = express();

app.use(express.json());

app.use("/koders", kodersRouter);
app.use("/mentors", mentorsRouter);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "KodemiaAPI",
  });
});

module.exports = app;
