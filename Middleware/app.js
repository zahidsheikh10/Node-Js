const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use('/login',express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.send('Hello');
});

app.post('/login',(req,res) => {
    console.log(req.body.email);
    // 
    res.redirect('/');
})

app.listen(port, () => console.log(`Server is running at port ${port}`));