var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('plants').innerJoin('gardeners', 'plants.gardener_id', 'gardeners.gardener_id')
  .then(function(results){
    res.render('index', {plantsAndGardeners: results});
  })
});

module.exports = router;
