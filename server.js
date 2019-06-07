const express = require('express');
const ampCors = require('amp-toolbox-cors');
const bodyParser = require('body-parser');
const device = require('./utils/device');
// const isProd = process.env.NODE_ENV === 'production';

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
// app.get('/', (req, res, next) => {
//   res.writeHead(isProd ? 301 : 302, {
//     Location: '/amp',
//   });
//   res.end();
// });

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

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
