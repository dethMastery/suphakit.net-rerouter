let exp = require('express')
let path = require('path')
let app = exp()
let wPort = 4000

app.use(exp.static('./static'))
app.use(exp.static(__dirname))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

function homePage(req, res) {
    res.render('index.jade')
}

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './static/index.html'))
})

app.get('/donation', function (req, res) {
    res.sendFile(path.resolve(__dirname, './static/donation.html'))
})

app.get('/about', function (req, res) {
    res.sendFile(path.resolve(__dirname, './static/about.html'))
})

app.get('/payment', function (req, res) {
    res.sendFile(path.resolve(__dirname, './static/payment.html'))
})

app.get('/logo.png', function (req, res) {
    res.sendFile(path.resolve(__dirname, './static/logo.png'))
})

app.listen(wPort, () => {
    console.log('Express starting @ http://localhost:' + wPort);
})