const mongoose = require('mongoose');
// Database connection
const URIMONGODB = "mongodb+srv://gmayasds:a2Amq1aL7GO2TIuq@clustermsg.fxdwzg2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMsg";
//
mongoose.connect(URIMONGODB, {})
.then((db) => console.log("Mongodb is connected to: ", URIMONGODB))
.catch(err => console.log('Mongodb connected error in Cluster: ', err));
