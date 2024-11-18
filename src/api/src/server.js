const express = require('express');

const app = express();
const port = 5000;

app.get('/api/v1/', (req, res) => {
    res.send('This insnt the frontend how did you get here!');
});

app.get('/api/v1/health', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});