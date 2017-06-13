var http = require('http');

http.createServer(httpRequestHandle).listen(9615);

function httpRequestHandle(req, res) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(books));
}

Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1;
    var dd = this.getDate();

    return [this.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('-');
};

var books = [
    {
        title: 'don quixote ',
        author: 'Miguel De Cervantes',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: 'a tale of two cities',
        author: 'Charles Dickens',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: 'le petit prince',
        author: 'Antoine De Saint-Exupéry',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: 'harry potter',
        author: 'J. K. Rowling',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: '!!!@!the hobbit',
        author: 'J. R. R. Tolkien',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: 'and then there were none',
        author: 'Agatha Christie',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: 'dream of the red chamber!!!@!',
        author: 'Cao Xueqin',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
    {
        title: 'alice in wonderland',
        author: 'Lewis CSarroll',
        date: new Date().yyyymmdd(),
        imgPath: 'http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2'
    },
]


