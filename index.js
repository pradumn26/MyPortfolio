const express = require('express');
const path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Backend is hosted on port ' + PORT);
});