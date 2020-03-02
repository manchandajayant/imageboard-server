const express = require("express");
const app = express();
const imageRouter = require("./Image/router");

const port = process.env.PORT || 4000;

app.use(imageRouter);

app.listen(port, () => console.log(`This app is running on port ${port}`));
