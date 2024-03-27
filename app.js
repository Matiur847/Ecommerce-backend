const express = require("express");
const productRoute = require("./router/productRoute");
const userRoute = require("./router/userRoute");
const orderRoute = require("./router/orderRoute");
const payment = require("./router/paymentRoute");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const app = express();
require("./config/db");

const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "https://ecommerce-backend-sable-seven.vercel.app",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(fileUpload());

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", payment);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "https://ecommerce-backend-sable-seven.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
  next();
});

app.use((req, res, next) => {
  res.send("Route Not Found!");
});

// error handler

module.exports = app;
