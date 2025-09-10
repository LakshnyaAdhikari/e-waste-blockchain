const express = require('express');
const bodyParser = require('body-parser');
const deviceRoutes = require('./routes/device');

const app = express();
app.use(bodyParser.json());

app.use('/device', deviceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
