const express = require("express");

const api = express();

api.use(express.static("static"));

api.listen(3000, () => console.log("Server is listening in http://localhost:3000"));