const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.send('hello world');
});

app.get('/home', (request, response) => {
    response.render('index');
});

app.get('/create', (request, response) => {
    response.render('index');
});
app.listen(port, () => {
    console.log(`Aplikasi ini telah dijalankan di http://localhost:${port}`);
})