import express from 'express';
import cors from 'cors';
import appDataSource from './data-source';
import plantRouter from './routes/PlantRoutes';

appDataSource.initialize()
    .then(() => { // initialisation de l'orm

    //paramètres
    const app = express(); // pour utiliser les élément de express

    app.use(express.json()); // paramètre la possibilité de récupérer des infos dans un body en format json (autorisation de renvoyer des objets json)
    app.use(cors({
        origin:"*", // équivalent de 'http://localhost:3000' 
        methods: ["GET", "POST", "PUT", "DELETE"],
    }));

    // Routes
    app.use("/api/plants", plantRouter); // Route initiale de plantRouter (ce qui s'inscrit après localhost):

    app.listen(process.env.PORT, () => {
        console.log(`API is running on PORT :${process.env.PORT}`);
    });    
})
    .catch((err) => {
        console.log('an error occured : ', err);
    });