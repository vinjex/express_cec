const express = require('express');
const { exec } = require('child_process');

const spawn = require('child_process').spawn;

const app = express();
const port = 3000;

const cec = spawn('cec-client', ['-d', '1',] , {});

cec.stdout.on('data', (data) => {
  console.log('CEC-CLIENT: ' + data);
});

app.get('/tv_on', (req, res) => {
  console.log('Called GET /tv_on');
  res.status(200).send('OK');
  cec.stdin.write('on 0' + '\n');
});

app.get('/tv_off', (req, res) => {
  console.log('Called GET /tv_off')
  res.status(200).send('OK');
  cec.stdin.write('standby 0' + '\n');
});

app.get('/status', (req, res) => {
  console.log('Called GET /status');
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});
