const express = require('express');
const { authenticateUser } = require('./src/middlewares');
const libraryRoutes = require('./src/routes/libraryRoutes');
const app = express();


app.use(express.json());


//auth routes (login,signup etc)

// app.use(authenticateUser);  //to authenticate the user on every request
app.use('/library', libraryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});



app.listen(3000, () => console.log('Server started on port 3000'));