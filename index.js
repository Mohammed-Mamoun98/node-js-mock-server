const express = require("express");
const app = express();
const dummyRoute = require("./src/routes/dummy-route");
const corsMiddleware = require("./src/middleware/cors");

app.use(express.json());
app.use(corsMiddleware);
app.use("/", dummyRoute);

app.listen(3000, () => {
  console.log("server is up!");
});
