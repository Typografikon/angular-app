
const express = require('express');
const path = require('path');
const fs = require('fs');

const app  = express();
const port = process.env.PORT || 8080;

function serveJson(res, filePath) {
    let id = new Intl.DateTimeFormat('cs-CZ', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'file read error' });
            return;
        }
        console.log(`[${id}] ${filePath}`);
        res.type('application/json; charset=utf-8').send(data);
    });
}

app.get('/message', (req, res) => {
    const file = path.resolve(__dirname, 'public', 'message.json');
    serveJson(res, file);
});

app.use('/api/v2/codebooks', (req, res) => {
    const file = path.resolve(__dirname, 'public', 'codebook.json');
    serveJson(res, file);
});

app.listen(port, () => {
    console.log(`Static content serving on http://localhost:${port}`);
});
