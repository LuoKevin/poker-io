const express = require('express');
const cookieParser = require('cookie-parser');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
