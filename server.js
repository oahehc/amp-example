const express = require('express');
const ampCors = require('amp-toolbox-cors');
const bodyParser = require('body-parser');
const device = require('./utils/device');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const path = require('path');
const fs = require('fs');
const https = require('https');
var certOptions = {
  key: fs.readFileSync(path.resolve('./cert/server.key')),
  cert: fs.readFileSync(path.resolve('./cert/server.crt')),
};

// init db
const adapter = new FileSync('./db/db.json');
const db = low(adapter);
db.defaults({ user: {} }).write();

// start express server
const app = express();
const port = process.env.PORT || '8888';

// parser for express request
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// API for AMP page
app.use(
  ampCors({
    verifyOrigin: false,
  }),
);
app.get('/amp/list', (req, res, next) => {
  res.send({
    items: {
      userAgent: (req.query && req.query.ua) || '',
      device: device(req.query && req.query.ua),
    },
  });
});
app.get('/amp/client', (req, res, next) => {
  const clientId = (req.query && req.query.cid) || '';
  let count = 1;
  if (clientId) {
    const userCount = db.get(`user.${clientId}`).value();

    if (userCount) count = userCount + 1;
    db.set(`user.${clientId}`, count).write();
  }

  res.send({
    items: {
      clientId,
      count,
    },
  });
});

const server = https.createServer(certOptions, app).listen(port);
// app.listen(port, () => {
//   console.log(`app is listening at port ${port}`);
// });
