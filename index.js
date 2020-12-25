// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000
//const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send({ hello: "world" });
    });
const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});