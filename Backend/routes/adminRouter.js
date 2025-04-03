const route = require("express").Router()
const adminController = require("../controllers/adminController")
route.post("/addAdmin",adminController.Creatadmin)
route.get("/getAdmin",adminController.Getadmin)
route.get("/getAdmin/:id",adminController.getById)
route.delete("/DeleteAdmin/:id",adminController.DeleteId)
route.put("/ChangeAdmin/:id",adminController.UpdateById)
module.exports = route