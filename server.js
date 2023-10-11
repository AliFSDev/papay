const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
    "mongodb+srv://Krodeg:fDVGNRJRQ1nj3PBG@cluster0.kf5blov.mongodb.net/Reja";

mongodb.connect(
    connectionString,           // bu birinchi parametr
    {
        useNewUrlParser: true,  // bu 2ta qator ikkinchi parametr
        useUnifiedTopology: true,
    }, 
    (err, client) => {          // callback function uchunchi parametr
        if(err) {
            console.log("ERROR on connection MongoDB");
        } else {
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function() {
                console.log(
                    `succesfully, your port:${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);