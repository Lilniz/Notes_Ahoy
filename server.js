const express = require('express');
const routes = require('./route/express')

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/api', routes);
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on PORTL ${PORT}`));