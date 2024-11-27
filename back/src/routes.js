const express = require('express')
const router = express.Router();

const cliente = require('./controller/cliente')


const teste =(req, res) => {
    res.json("Ok");
}

router.get('/',teste);
router.post('/cliente',cliente.create);
router.get('/cliente',cliente.read);
router.put('/cliente/:id',cliente.update);
router.delete('/cliente/:id', cliente.deletar);

module.exports = router;