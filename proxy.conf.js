// proxy.conf.js
const fs = require('fs');
const path = require('path');

module.exports = [
    {
        context: ['/message'],
        target: 'http://localhost:4200',
        secure: false,
        changeOrigin: false,
        bypass: (req, res) => {
            if (req.method === 'GET' && req.url === '/message') {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                const file = path.resolve(__dirname, 'public', 'message.json');
                const json = fs.readFileSync(file, 'utf8');
                res.end(json);
                return true; // zabrání dalšímu proxy zpracování
            }
            return false;
        },
    },
];
