'use strict';

import {express} from 'express'

const portno = 3000;   // Port number to use

const app = express();

app.use(express.static(__dirname));

const server = app.listen(portno, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});
