import express from "express";
import cors from "cors";
import appDataSource from "./data-source";

// require('dotenv').config();
// console.log(process.env.DB_HOST, process.env.DB_PASSWORD);
// if (typeof process.env.DB_PASSWORD !== 'string') {
//     throw new Error('Le mot de passe de la base de données doit être une chaîne de caractères.');
// }

appDataSource.initialize().then(() => {
    
    const app = express();
    
    app.use(express.json());
    app.use(
        cors({
        origin: "*", //http://localhost:3000
        methods: ["GET", "POST", "PUT", "DELETE"],
        })
    );
    //app.use(express.json());
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });
