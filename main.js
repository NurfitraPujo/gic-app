const express = require("express");
const app = express();
const port = process.env.APP_PORT ?? 3000;
const host = process.env.APP_HOST ?? "localhost";

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});
