var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/vpnPlus', async (req, res, next) => {
    res.setHeader('Content-type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment;filename=vpnPlus.zip');
    let fileStream = fs.createReadStream(  'public/files/VPNPlus.zip');
    fileStream.on('data', function (data) {
        res.write(data, 'binary');
    })

    fileStream.on('end', function () {
        res.end();
    })
});

module.exports = router;
