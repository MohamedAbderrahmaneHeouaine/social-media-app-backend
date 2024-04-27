const express = require('express')
const bodyParser = require('body-parser')
const  mongoose  = require('mongoose')
const cors = require('cors')
const AuthRoute = require('./Routes/AuthRoute')
const UserRoute = require('./Routes/UserRoute')
const UploadRoute = require('./Routes/UploadRoute')
const PostRoute = require('./Routes/PostRoute')
const ChatRoute = require('./Routes/ChatRoute')
const MessageRoute = require('./Routes/MessageRoute')
require('dotenv').config()
const app = express()
app.use(express.static('public'))
app.use('/images', express.static("images"))
app.use(cors({origin:'http://localhost:5173', credentials: true}))
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use('/upload',UploadRoute)
app.use('/auth', AuthRoute)
app.use('/users',UserRoute)
app.use('/posts',PostRoute)
app.use('/chat',ChatRoute)
app.use('/message', MessageRoute)
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(8800,console.log('listening on port 8800'))
    } catch (error) {
        console.log(error)
    }
    
}
connectToDatabase()