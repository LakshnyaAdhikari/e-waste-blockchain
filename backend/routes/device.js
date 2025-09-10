// routes/device.js
const express = require('express');
const router = express.Router();
const devices = require('../models/Device');
const blockchain = require('../blockchain');
const Block = require('../blockchain').Block; // You'll need to export Block from blockchain.js

router.get('/:id', (req, res) => {
    const device = devices.find(d => d.id === req.params.id);

    if (device) {
        // Create a new Block instance with the correct data
        const newBlock = new Block(
            blockchain.getLatestBlock().index + 1,
            Date.now(),
            { action: 'DEVICE_VIEWED', deviceId: device.id },
            blockchain.getLatestBlock().hash
        );
        
        blockchain.addBlock(newBlock);

        res.json({ device, blockchain: blockchain.getChain() });
    } else {
        res.status(404).json({ message: 'Device not found' });
    }
});

module.exports = router;