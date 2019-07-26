const express = require('express')
const app = express();
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const port = 3000


//express will convert incoming information into readable code when this is executed
app.use(bodyParser.urlencoded({
    extended: true
}));
//set view engine to parse ejs files
app.set("view engine", "ejs");
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//just a bcrypt test
bcrypt.hash("password", 10, (err, hash) => {
    console.log(hash);
    bcrypt.compare("password", hash, (err, res) => {
        console.log(res);
    })
});
//just a bcrypt test
app.get('/test', (req, res) => {
    res.render('test');
})