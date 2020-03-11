const app = require('../index');
const syncDB = require('./sync-db');

syncDB().then(() => {
  console.log('Sync database!');
  app.listen(3000, () => {
    console.log("example app listening on port 3000!");
  });
});
