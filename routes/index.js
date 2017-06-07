var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/1201199400622', function(req, res, next){
  var examen = [
    {"Nombre Completo": "Jose Carlos Sanchez Rivera"},
    {"Numero de Cuenta":1201199400622},
    {"Correo Electronico": "joscarrivera1994@gmail.com"}
  ];
  res.json(examen)
});
router.get('/suma', function(req, res, next) {
  res.render('suma', { "txtNumero1":"","txtNumero2":"", "sum":""});
});

var suma = [];
router.post('/suma', function(req, res, next) {
console.log(req.body);
    var num1 = req.body.txtNumero1;
    var num2 = req.body.txtNumero2;


    suma.push(parseInt(num1)+parseInt(num2))

    var total = suma;
    var sumar = {"sum":total}
    res.render('suma', sumar);
  });

module.exports = router;
