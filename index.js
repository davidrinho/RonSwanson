const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Use
app.use('/static', express.static('static'));

// GET
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});