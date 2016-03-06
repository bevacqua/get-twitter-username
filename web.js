const express = require('express');
const cors = require('cors');
const getUsername = require('./');
const port = process.env.PORT || 3000;
const gh = process.env.GITHUB_ACCESS_TOKEN;
const app = express();

app.get('/:username', cors(), (req, res) => {
  getUsername(req.params.username, { gh })
    .then(username => res.end(username || ''));
});
app.listen(port);
