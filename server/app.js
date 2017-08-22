var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var pool = require('./pool.js');


app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/bluethings', function(req, res){
    console.log('Get route was hit');
    pool.connect(function(err, db, done){
        if (err){
            done();
            console.log('Error connecting to db', err);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM bluethings;', 
            function(err, result){
                if (err){
                    done();
                    console.log('Error making query', err);
                    res.sendStatus(200);
                } else {
                    done();
                    res.send(result.rows);
                }
            });
        }
    });
});

app.get('/redthings', function(req, res){
    console.log('Get route was hit');
    pool.connect(function(err, db, done){
        if (err){
            done();
            console.log('Error connecting to db', err);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM redthings;', 
            function(err, result){
                if (err){
                    done();
                    console.log('Error making query', err);
                    res.sendStatus(200);
                } else {
                    done();
                    res.send(result.rows);
                }
            });
        }
    });
});

app.listen(port, function(){
    console.log('Listening on port:', port);
    
});