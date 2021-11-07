const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const email = require("./email");
app.use(express.json());
app.use(cors());

app.post("/", async function (req, res) {
  let body = req.body;
  let notifyCustomer = await email.customer(body);
  let notifyStore = await email.store(body);
  res.send({ notifyCustomer, notifyStore });
});

module.exports.handler = serverless(app);
