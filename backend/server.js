const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const colors = require("colors");
const router = require('./routes/userRoutes')
const port = process.env.PORT || 5000;
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', router)

// Serve frontend
if (process.env.NODE_ENV === "development") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);
app.listen(port, () => console.log(`Listening on ${port}`));
