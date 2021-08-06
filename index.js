const express = require("express");
const app = express();
 
app.listen(3010, function () {
  console.log("listening on 3010");
});
 
app.get("/", (req, res) => {
  res.send("Users Shown and changes recored on 06/08/2021");
});
 
app.get("/delete", (req, res) => {
  res.send("Delete User");
});
 
app.get("/update", (req, res) => {
  res.send("Update User");
});
 
app.get("/insert", (req, res) => {
  res.send("Insert User");
});

