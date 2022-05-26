const Router = require("express");
const { drinksController } = require("../controllers/drinks.controllers");
const router = Router();

router.get("/drinks", drinksController.getDrinks);
router.get("/drinks/in-stock", drinksController.getAvailable);
router.get("/drinks/:id", drinksController.aboutDrinks);
router.post("/drinks", drinksController.postDrinks);
router.delete("/drinks/:id", drinksController.deleteDrinks);
router.patch("/drinks/:id", drinksController.patchDrinks);

module.exports = router;
