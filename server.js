const express = require("express");
const morgan = require("morgan"); // network logs
const dotenv = require("dotenv");

// load env variables
dotenv.config({ path: "./config.env" });

const app = express();

// development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/profile/", require("./routes"));

// when in production mode
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(__dirname + "/public/"));
  // when making a signl page application we need to load the index.htmL once
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} on mode on port ${port}`
  );
});
