import express from 'express';
import { join } from 'path';
let app = express();
let port = process.env.port || 3000;

app.set('views',join(__dirname,'views'));
app.set('view engine','pug');

app.get('/',(req,res) => {
    res.render("index");
});
app.listen(port,() => console.log(`Server is running at ${port}`));