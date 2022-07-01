const router= require("express").Router()
const {createToDo,getToDo,getAllTodo,removeToDo,updateTodo} = require("../controller/controller")
router.route("/").post(createToDo).get(getAllTodo)
router.route("/:id").get(getToDo).delete(removeToDo).patch(updateTodo)

module.exports= router