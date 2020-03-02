const express = require("express");
const app = express();
const image = require("./Image/model");

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`This app is running on port ${port}`));
