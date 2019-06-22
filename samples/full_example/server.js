const express = require('express');
const ampCors = require('amp-toolbox-cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || '8888';
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(
  ampCors({
    verifyOrigin: false,
  }),
);
app.get('/api/list', (req, res, next) => {
  res.send({
    items: {
      list: ['Hello,', 'AMP', '!'],
    },
  });
});
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
