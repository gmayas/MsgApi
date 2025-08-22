const mongoose = require('mongoose');
// Database connection
const URIMONGODB = process.env.URIMONGODB; // Ensure this is set in your .env file
if (!URIMONGODB) {
  console.error('URIMONGODB is not defined in the environment variables.');
  process.exit(1);
}   
//
mongoose.connect(URIMONGODB, {})
.then((db) => console.log("Mongodb is connected successfully in Cluster: ", process.env.CLUSTER_NAME))
.catch(err => console.log('Mongodb connected error in Cluster: ', err));
