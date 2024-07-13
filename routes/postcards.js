var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { listAll, listOne, add, remove } = require('../controllers/postcards');

// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
    listAll(res);
});

router.get('/:id', (req, res) => {
    const postId = req.params.id;
    listOne(postId, res)
});

router.post('/', (req, res) => {
    add(res, req)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params.id;
    remove(res, req);
});

module.exports = router;
