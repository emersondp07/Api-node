const express = require('express');
const userServices = require('../service/userServices');

const router = express.Router();

router.get("/findall", userServices.findAll);
router.post("/create", userServices.create);
router.get("/findbyid/:id", userServices.findById);
router.put("/update/:id", userServices.updateUser);
router.delete("/delete/:id", userServices.deleteUser);



module.exports = router;