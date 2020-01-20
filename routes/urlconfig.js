var express = require('express')
var router = express.Router()
const models = require('../db/models/index')

router.post('/get',async (req, res, next) => {

    try {
        let { orderId } = req.body

        if (!orderId) {
            res.json({
                result: -1,
                msg: 'orderId必须输入'
            })
        }

        let result = await models.urlconfig.findOne({
            where: {
                orderId
            }
        })

        res.json({
            code: 0,
            msg: 'success',
            result: {
                url: result.url,
                switch: result.switch
            }
        })
    } catch (e) {
        next(e)
    }

})

module.exports = router