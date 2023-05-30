const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const salt = bcrypt.genSaltSync(10)
const secret = bcrypt.genSaltSync(10)

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json())

mongoose.connect(
    'mongodb+srv://recipe:D9FSR6PGycAdoPld@recipe-app.kjl8gzx.mongodb.net/?retryWrites=true&w=majority'
)

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    try {
        const User = await UserModel.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(User)
    } catch (e) {
        res.status(400).json(e)
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const userDoc = await UserModel.findOne({ username })
    const passOk = await bcrypt.compareSync(password, userDoc.password)
    if (passOk) {
        jwt.sign({
            username,
            id: userDoc._id
        }, secret, {}, (err, token) => {
            res.cookie('token', token).json('ok')
        })
    } else {
        res.status(400).json('Wrong Credentials')
    }
})

app.listen(4000)