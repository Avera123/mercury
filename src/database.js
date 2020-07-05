const mongoose = require('mongoose');

const URI = process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conection open');
});