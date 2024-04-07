import { Router } from "express";
import PlantController from "../controllers/PlantControllers";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
  plantController.getAll(req, res);
});

plantRouter.get("/:id", (req, res) => {
  plantController.getById(req, res);
});

plantRouter.post("/", (req, res) => {
  plantController.create(req, res);
});

plantRouter.put("/:id", (req, res) => {
  plantController.update(req, res);
});

plantRouter.delete("/:id", (req, res) => {
  plantController.delete(req, res);
});

export default plantRouter; //sera appelé par l'index,