const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const kodersRouter = require("./routes/koders.routes");
const mentorsRouter = require("./routes/mentors.routes");
const generationsRouter = require("./routes/generations.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/koders", kodersRouter);
app.use("/mentors", mentorsRouter);
app.use("/generations", generationsRouter);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "KodemiaAPI",
  });
});

module.exports = app;
