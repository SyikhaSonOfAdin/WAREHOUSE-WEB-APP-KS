const express = require('express');
const path = require('path');
const loginAuthentication = require('./Model/login');
const session = require('express-session');


const app = express();
const port = 3000;

app.use(session({
    secret: 'WelcomeToOurShipLads', // Ganti dengan kunci rahasia Anda
    resave: false,
    saveUninitialized: true
}))


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.status(200).render('panel')
})
app.get('/login', (req, res) => {
    res.status(200).render('login');
})
app.get('/system', (req, res) => {
    res.status(200).render('system');
})
app.get('/add-system', (req, res) => {
    res.status(200).render('addSystem');
})
app.use('/dll', loginAuthentication);


// NOT FOUND PAGE 
app.use('/', (req, res) => {
    res.status(404).render('notFound');
})
app.listen(port, () => {
    console.log(`App listening on port ${port} localhost:${port}`)
})