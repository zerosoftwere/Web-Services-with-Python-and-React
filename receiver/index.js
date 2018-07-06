const express = require('express');
const morgan = require('morgan');
const WebSocket = require('ws');
const http = require('http');
const ampq = require('amqplib/callback_api');

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server: server});

app.use(morgan('dev'));
app.use(express.static('public'));

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
        client.send(data);
        }
    });
};

ampq.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        ch.assertQueue('post', {durable: false});
        ch.consume('post', (msg) => {
            data = msg.content.toString();
            wss.broadcast(data);
            console.log(`[${Date.now()}] - Broadcasting message ${data}`);
        });
    });
});

server.listen(port, () => {
   console.log(`Server listening on http://locahost:${port}`);
});

