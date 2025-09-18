// proxy.conf.js
const fs = require('fs');
const path = require('path');

function id(req) {
    return `${Date.now()}-${Math.floor(Math.random()*10000)}`;
}
module.exports = [
    {
        context: ['/message', '/api/v2/codebooks'],
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
        logLevel: 'info',
    },
];
