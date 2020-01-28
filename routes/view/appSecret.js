var express = require('express')
var router = express.Router()

router.get('/appsecret', (req, res ,next) => {
    res.render('appSecret/index')
})

module.exports = router