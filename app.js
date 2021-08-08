var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Assalamualaikum RAN Indonesia\n');
});

app.get('/Bagaimana_kabarmu', function (req, res) {
  res.send('<h2>Waalaikumsalam, Alhamdulillah baik Bro</h2>\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

