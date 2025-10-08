const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findALL();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({message:'Error getting articles', error:error.message});
    }
};

exports.createArticle = async (req, res) => {
    try {
        const {} = req.body;
        const article = await Article.create();
        res.status(200).json(article);
    } catch(error){
        res.status(500).json({message:'Error creating article', error: error.message});
    }
};

exports.getArticleById = async (req, res) => {
    try{
        const {id} = req.body;
        const article = await Article.findId(id);
        res.status(200).json(article);
    } catch(error) {
        res.status(500).json({message: 'Error finding the article', error:error.message});
    }
};

exports.updateArticle = async (req, res) => {
    try {
        const {id} = req.body;
        const updatedArticle = await Article.update();
        res.status(200).json({message:"Article updated successfully", updatedArticle});
    } catch (error) {
        res.status(500).json({message:'Failed to update', error:error.message});
    }
};

exports.deleteArticle = async (req, res) => {
    try{
        const {id} = req.body;
        const deletedArticle = await Article.delete();
        res.status(200).json(deletedArticle);
    } catch(error) {
        res.status(500).json({message:'error deleting article', error:error.message});
    }
};