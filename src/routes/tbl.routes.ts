import { Router } from "express";
import { TblController } from "../controllers/tbl.controller";

class TblRoutes {
  router = Router({mergeParams: true});
  controller: TblController = new TblController();
  constructor()
  {
    this.intializeRoutes();
  }
  intializeRoutes() {
    // Create a new Entity
    this.router.post("/", this.controller.create);
// Retrieve all Entities
    this.router.get("/", this.controller.findAll);
// Retrieve a single Entity with id
    this.router.get("/:id", this.controller.findOne);
// Update a Entity with id
    this.router.put("/:id", this.controller.update);
// Delete a Entity with id
    this.router.delete("/:id", this.controller.delete);
  }
}
export default new TblRoutes().router;
