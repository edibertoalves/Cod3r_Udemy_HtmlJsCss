const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
//  app.use(bodyParser.json);

app.get("/teste", (req, res) => {
    res.send('OK')    
});

app.listen("3030", () => {
    console.log("Servidor em Execução.");
});