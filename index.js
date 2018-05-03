const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use(bodyParser.json())

const inMemoryDatabase = {
    shows: [
        {
            name: 'Game of Thrones',
            rating: 5,
            image: 'http://bronlea.com/wp-content/uploads/2017/10/2742670-game-768x384.jpg'
        },
        {
            name: 'Friends',
            rating: 3,
            image: 'https://tvseriesfinale.com/wp-content/uploads/2015/11/Friends-TV-show-on-NBC-canceled-no-season-11-590x332.jpg'
        },
        {
            name: 'Friends',
            rating: 2,
            image: 'https://tvseriesfinale.com/wp-content/uploads/2015/11/Friends-TV-show-on-NBC-canceled-no-season-11-590x332.jpg'
        }
    ]
}

app.get('/shows', (req, res) => {
    res.send(inMemoryDatabase.shows)
})

app.post('/shows', (req, res) => {
    const newShow = req.body
    inMemoryDatabase.shows.push(newShow)
    res.send(newShow)
} )


app.listen('3001', () => console.log('Running on port 3001'))