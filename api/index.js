const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs')

const salt = bcrypt.genSaltSync(10)
const secret = bcrypt.genSaltSync(10)

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'))

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
            res.cookie('token', token).json({
                id: userDoc._id,
                username
            })
        })
    } else {
        res.status(400).json('Wrong Credentials')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err
        res.json(info)
    })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const { token } = req.cookies
    const { originalname, path } = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)

    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err
        const { title, summary, time, content } = await req.body
        const postDoc = await PostModel.create({
            title,
            summary,
            time,
            content,
            cover: newPath,
            author: info.id
        })
        res.json(postDoc)
    })
})

app.get('/post', async (req, res) => {
    const posts = await PostModel.find()
        .populate('author', ['username'])
        .sort({ title })
    res.json(posts)
})

app.listen(4000)