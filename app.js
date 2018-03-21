const express = require("express");
const path= require("path");
const bodyParser= require("body-parser");

const app= express();

app.use(bodyParser.json());

app.get("/", (request, response, next) => {
  response.json({
    message: "Testing out the tactbook server"
  });
});


app.use((request, response, next) => {
  var err= new Error("Not found");
  response.status(404);
  next(err);
});

app.use((err, request, response, next) => {
  response.status(response.statusCode || 500);
  response.json({
    message: err.message,
    stack: request.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports= app;