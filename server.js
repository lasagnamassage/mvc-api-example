const express = require('express');
const app = express();

const routes = require('./routes/users');

// set up routes
app.use('/', routes);

// start the server
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})