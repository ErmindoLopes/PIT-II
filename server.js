// ref https://www.devmedia.com.br/subindo-uma-aplicacao-angular-para-o-heroku/40260

// const compression = require('compression');
const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
var enforce = require('express-sslify');
const app = express();

// app.use(compression());

//Force ssl for heroku
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

// Initialize the app.
app.listen(process.env.PORT || 8080);
