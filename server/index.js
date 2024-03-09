const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const connectionString = process.env.connectionString;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
}

app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello Wordl!" });
});

app.listen(PORT, () => {
  console.log("Listening on port "+PORT);
});
