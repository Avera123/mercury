const app = require('./app');

async function main() {
    await app.listen(4000);
    console.info("Running on Port 4000");
}

main();