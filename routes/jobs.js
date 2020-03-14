var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('jobs', { title: 'Trabajos GitHub', subtitle: 'Las mejores ofertas de empleo encuentralas aquí'});
  });

  module.exports = router;