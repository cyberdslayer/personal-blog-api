const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/', articleController.getAllArticles);
router.post('/create', articleController.createArticle);
router.get('/:id', articleController.getArticleById);
router.put('/update/:id', articleController.updateArticle);
router.delete('/delete/:id', articleController.deleteArticle);

module.exports = router;