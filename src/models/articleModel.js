const pool = require('../config/db');

async function findAllArticles(){
    const [rows] = await pool.query('SELECT * FROM articles');
    return rows;
}
async function createArticle(articleData){
    const {title, content} = articleData;
    const [result] = await pool.query('INSERT INTO articles (title, content) VALUES(?, ?)', [title, content]);
    return {id: result.insertId, title, content};
} 
async function findArticleById(id){

}
async function updateArticle(){

}
async function deleteArticle(){

}

module.exports = {findAllArticles, createArticle, findArticleById, updateArticle, deleteArticle};