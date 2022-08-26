const express = require("express");
const cors = require("cors");
require("./config");
const User = require("./NewClient");

app = express();
app.use(cors());

app.use(express.json());
app.post("/newclient", async (req, resp) => {
  let get = new User(req.body);
  let result = await get.save();
  resp.send(result);
});
app.get("/client", async (req, resp) => {
  let client = await User.find();
  if (client.length > 0) {
    resp.send(client);
  } else {
    resp.send({ result: "no client found" });
  }
  console.log(client);
});

app.delete("/deleteclient/:id", async (req, resp) => {
  let result = await User.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/deleteclient/:id", async (req, resp) => {
  let result = await User.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no record found" });
  }
});

app.put("/deleteclient/:id", async (req, resp) => {
  let result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

app.listen(9000);
