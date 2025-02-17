const express = require('express');

const app = express(); 

app.use('/', (req, res, next) => {
    console.log("home");  
    next();  
});

app.use('/users', (req, res, next) => {
    console.log("users middleware");
    res.send('<ul><li>user 1</li><li>user 2</li></ul>');
});
app.use( (req, res, next) => {
    console.log("home");  
    res.send('<h1>Welcome to the home page</h1>');
});
app.listen(3000);
