const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');   // Import cors at the top
const deviceRoutes = require('./routes/device');

const app = express();

app.use(cors());               // Apply CORS first
app.use(bodyParser.json());

app.use('/device', deviceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
