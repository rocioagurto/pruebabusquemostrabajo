var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Buscador de empleos GitHub', subtitle:'5.600 empresas publicando en este momento'});
});

module.exports = router;

