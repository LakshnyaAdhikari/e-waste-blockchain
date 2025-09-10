const express = require('express');
const router = express.Router();
const devices = require('../models/Device');
const blockchain = require('../blockchain');

router.get('/:id', (req, res) => {
    const device = devices.find(d => d.id === req.params.id);

    if (device) {
        blockchain.addBlock({ action: 'DEVICE_VIEWED', deviceId: device.id, timestamp: Date.now() });
        res.json({ device, blockchain: blockchain.getChain() });
    } else {
        res.status(404).json({ message: 'Device not found' });
    }
});

module.exports = router;
