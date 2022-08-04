const express = require('express');
const path = require('path');
const PORT = process.env.PORT || process.env.API_PORT;

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})