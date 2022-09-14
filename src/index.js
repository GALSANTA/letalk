const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json()); // fazer o backend entender json
app.use(routes);

app.listen(PORT, () => {
    console.info(`Example app listening on port ${PORT}`)
});