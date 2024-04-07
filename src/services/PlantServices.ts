import appDataSource from "../data-source";
import { Plant } from "../entities/Plant";

class PlantService {

    private plantRepository = appDataSource.getRepository(Plant);

    async getAll() { // AppDataSource.query("SELECT * FROM plant;");
        return this.plantRepository.find();
    }

    async getById(id: number) { // AppDataSource.query(`SELECT * FROM plant WHERE id = ${id};`);
        return this.plantRepository.findOneBy({ id: id });
    }

    async create(plant: Plant) {// AppDataSource.query(`INSERT INTO plant (nom) VALUES ('${plant.nom}');`);
        const newPlant = this.plantRepository.create(plant);
        return this.plantRepository.save(newPlant);
    }

    async update(id: string, plant: Plant) { // AppDataSource.query( `UPDATE book SET title = '${book.title}' WHERE id = ${id};`);
        return this.plantRepository.update(id, plant);
    }

    async delete(id: string) { // AppDataSource.query(`DELETE FROM book WHERE id = ${id};`);
        return this.plantRepository.delete(id);
      }
}

export default PlantService;