var express = require('express')
var router = express.Router()
const models = require('../db/models/index')

router.post('/get',async (req, res, next) => {

    try {
        let { orderId } = req.body

        if (!orderId) {
            res.json({
                code: -1,
                msg: 'orderId必须输入',
                result: null
            })
        }

        let result = await models.urlconfig.findOne({
            where: {
                orderId
            }
        })

        if (!result) {
            res.json({
                code: -1,
                msg: 'orderId 无效',
                result: null
            })
        }

        res.json({
            code: 0,
            msg: 'success',
            result: {
                url: result.url,
                jump: result.jump,
                showTab: result.tab
            }
        })
    } catch (e) {
        next(e)
    }

})

module.exports = router