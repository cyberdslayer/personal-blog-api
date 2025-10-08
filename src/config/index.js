const express = require('express');
const articleRoutes = require('../routes/articleRoutes');

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/api/articles', articleRoutes);

app.listen(port, ()=> {
    console.log("Server is running ");
});


