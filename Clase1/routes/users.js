var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre=req.query.nombre
  res.send('Hola'+nombre+ 'como estas');
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  var nombre=req.body.nombre
  res.send('Hola'+nombre+ 'como estas');
});

router.post('/suma', function(req, res, next) {
  console.log(req.body);
  var numero1 = Number(req.body.numero1);
  var numero2 = Number(req.body.numero2);
  var suma = numero1 + numero2;
  res.send(`La suma de ${numero1} y ${numero2} es ${suma}.`);
});

router.post('/contar', function(req, res, next) {
  console.log(req.body);
  var vocales = 'aeiouAEIOU';
  var consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  let numVocales = 0;
  let numConsonantes = 0;
  var texto = req.body.texto;

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (vocales.includes(caracter)) {
      numVocales++;
    } else if (consonantes.includes(caracter)) {
      numConsonantes++;
    }
  }

  res.send(`El texto "${texto}" contiene ${numVocales} vocales y ${numConsonantes} consonantes.`);
});

module.exports = router;
