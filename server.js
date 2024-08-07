// require express
const express = require("express")
const logger = require("./public/middleware/logger")
const members = require("./members")
//init express
const app = express()
app.use(logger)
// static files
app.use(express.static(__dirname + "/public"))


//get all members
app.get("/members", (req, res) => {
res.json(members)
})



//get member by id
app.get("/members/:id", (req, res) => {
    console.log(req.params.id)
res.json(members.filter(member => member.id === parseInt(req.params.id)))
})
// get member by name

app.get("/members/:name", (req, res) => {
    console.log(req.params.name)
    res.json(members.filter(member => member.name === parseInt(req.params.name)))
    })

//port
const PORT = 5500
//server
app.listen (PORT, (err) => {
    err ? console.log(err)
    :console.log (`Server running on port ${PORT}`)
})
//// Defining routes
app.get('/index.html', (req, res) => {
    res.render('index.html', { page: 'Home' });
  });
  
  app.get('/OurServices', (req, res) => {
    res.render('OurServices', { page: 'Our Services' });
  });
  
  app.get('/ContactUs', (req, res) => {
    res.render('ContactUs', { page: 'Contact Us' });
  });
  