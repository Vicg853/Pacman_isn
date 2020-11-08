const express = require("express");

const api = express();

api.use(express.static("static"));

api.listen(8080, () => console.log("Server is listening in http://localhost:3000"));
