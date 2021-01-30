const app = require('express')()
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const user = [
    {name:'tuly', prof:'developer'},
    {name:'tanjil', prof:'web developer'}
]


app.get('/', (req, res) => {
    res.send('running')
})

app.get('/user', (req, res) => {
    res.json(user)
})




app.listen(5000, console.log('server running'))




