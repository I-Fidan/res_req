const express = require('express');
const app = express();
const main=[
{name:"qelem",price:"0.7",amount:"2",id:"1"},
{name:"kitab",price:"10",amount:"3",id:"2"},
{name:"su",price:"0.5",amount:"10",id:"3"},
{name:"notebook",price:"1000",amount:"2",id:"4"},
{name:"phone",price:"200",amount:"4",id:"5"},
{name:"lovhe",price:"10",amount:"12",id:"6"},
{name:"pozan",price:"2.6",amount:"20",id:"7"},
{name:"ekran",price:"150",amount:"5",id:"8"},
{name:"camera",price:"206",amount:"14",id:"9"},
{name:"defter",price:"0.8",amount:"56",id:"10"}
]
console.log(main)
  app.get('/prod/:id', function (req, res) {
    res.send(JSON.stringify(main.find((user) => user.id == req.params.id)))
  });
  app.get('/prod', function (req, res) {
    res.send(JSON.stringify(main))
  });


app.listen(3006, function () {
  console.log('Example app listening on port 3006!');
}); 