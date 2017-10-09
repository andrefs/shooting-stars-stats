import config        from './config';
import express       from 'express';

const server = express();



server.get('/charts', function (req, res) {
  res.send('Hello World!')
})

server.listen(config.server.port, function () {
  console.log('ShootingStars - Stats listening on port', config.server.port)
})

module.exports = server;
