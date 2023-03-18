const express = require("express");
const app = express();
const connection = require("./database.js");

app.use(express.static("public"));
// app.use(express.static("public/log.html"));

let bodyParser = require("body-parser");
const { response } = require("express");

app.use(bodyParser.json());
//If we not use it will make undefined
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

let messages;

app.post("/submit-form", function (req, res) {
  const formData = req.body;
  console.log(`Form data received: ${JSON.stringify(formData.msg)}`);
  res.send("Form submitted successfully");
  messages = JSON.stringify(formData.msg);
  let input = {
    id: "1",
    list: messages,
  };
  let sql = "insert into `notes`.`noteData` set ?";
  connection.query(sql, input, (err, result) => {
    if (err) throw err;
    console.log(result);
    // res.redirect("");
  });
});

app.get('/show',(req,res)=>{
  let sql = "select * from `notes`.`noteData`";
  connection.query(sql,(err,result)=>{
    if(err) throw err;
    res.json(result);
});
});

app.get('/delete',(req,res)=>{
  let sql = "delete from `notes`.`noteData`";
  connection.query(sql,(err,result)=>{
      if (err) throw err;
      console.log("Deleted");
    })
})

app.get("/", function (req, res,next) {
  // res.json({"sd":"sd"});c
    // let sql = "select * from `notes`.`noteData`";
    // connection.query(sql,(err,result)=>{
    //   if(err) throw err;
    //   res.json(result);
// });
});

app.listen("8989", () => {
  console.log("Connected...");
});
