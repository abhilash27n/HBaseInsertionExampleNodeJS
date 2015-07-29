
var express = require('express');
var assert = require('assert');
var hbase = require('hbase');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/', function(req, res){
	//POST REQUEST
	var search = req.body.search;
	var rowid = req.body.rowid;
	console.log(search);
	var incid = parseInt(rowid) + 1;
	hbase({ host: < insert ip address of hbase hose >, port: 8081 })
		.table('searchdemo').row(rowid).put('info:searchkey',search, function(err, cells){
			this.put('info:timestamp','NOW', function(err, cells){
				//assert.ok(exists);
				//console.log("HELLO");
    		});
  		});

	res.render('index', {searchedTerm: search, idnum: incid});
});

module.exports = router;



