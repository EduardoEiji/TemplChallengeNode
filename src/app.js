const express = require("express");
const cors = require("cors");

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json({ message:'Hello World'});
});

app.post("/repositories", (request, response) => {
   const {title , url , techs} = request;
   console.log(` Recebi os parametro titulo como :${title}`);
   console.log(` Recebi os parametro url como :${url}`)
   console.log(` Recebi os parametro techs como :${techs}`)
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
