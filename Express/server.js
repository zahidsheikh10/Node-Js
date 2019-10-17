const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello world");
});
app.get('/about',(req,res) => {
    res.send('<h1>I am about page</h1>');
});
//create a route for contact us and services
app.get('/services',(req,res) => {
    res.send('<h1>I am from services</h1><p>we are offering the following services</p>');
});

app.post('/login',(req,res) => {
    res.send('Login sucess');
});

app.get('/ab*cd', (req, res) => {
    res.send('I am a regex page');
});

app.get('/user/:id/status/:status_id', (req, res) => {
    res.send(req.params);
});

app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => console.log(`Server is running at port ${port}`));