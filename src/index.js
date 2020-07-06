require('dotenv').config();

const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.info('Runngin on Port: ' + app.get('port'));
}

main();