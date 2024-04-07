import express from 'express';
import cors from 'cors';
import appDataSource from './data-source';

appDataSource.initialize().then(() => {

    //paramètres
    const app = express();

    app.use(express.json());
    app.use(cors({
        origin:"*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }));
    app.use(express.json);
    app.get("/", (req, res) => {
        res.send("Hello Worldd")
    });
    app.listen(process.env.PORT, () => {
        console.log(`API is running on PORT :${process.env.PORT}`);
    });    
})
    .catch((err) => {
        console.log('an error occured : ', err);
    });