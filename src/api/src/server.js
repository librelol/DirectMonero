const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('This insnt the frontend how did you get here!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/health', (req, res) => {
    res.send('OK');
});