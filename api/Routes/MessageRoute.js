const express = require('express')
const router = express.Router()
const {addMessage, getMessages} = require('../Controllers/MessageController')
router.post('/',addMessage)
router.get('/:chatId', getMessages)




module.exports = router