let express = require('express'),
    path = require('path');

let app = express();

app.listen(80, function () {
    console.log('Server is listening on 80 port');
});

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});


