const express = require('express')
const  router = express.Router()

router.get('/appDownload', (req, res, next) => {
    res.render('appDownload/index')
})

module.exports = router