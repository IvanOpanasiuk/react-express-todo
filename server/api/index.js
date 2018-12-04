const express = require("express");
const router = express.Router();
const Todos = require("../db/models/todos");

const todosCtrl = require("./controllers/todos");

router.get("/", (req, res) => {
  res.json({ success: true });
});

router.get("/getTodos", async (req, res) => {
  try {
    const result = await todosCtrl.getTodos();
    res.json(result);
  } catch (err) {
    console.error("err", err);
    res.status(500).json({ success: false, message: "Internal error" });
  }
});

router.post("/setTodo", async (req, res) => {
  try {
    const result = await todosCtrl.setTodo(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error("err", err);
    res.status(500).json({ success: false, message: "Internal error" });
  }
});

router.post("/getTodoById", async (req, res) => {
  try {
    const result = await todosCtrl.getTodoById(req.body);
    res.json(result);
  } catch (err) {
    console.error("err", err);
    res.status(500).json({ success: false, message: "Internal error" });
  }
});

router.put("/updateTodo", async (req, res) => {
  try {
    const result = await todosCtrl.updateTodo(req.body);
    res.json(result);
  } catch (err) {
    console.error("err", err);
    res.status(500).json({ success: false, message: "Internal error" });
  }
});

router.delete("/deleteTodo/", async (req, res) => {
  try {
    const result = await todosCtrl.deleteTodo(req.body);
    res.json(result);
  } catch (err) {
    console.error("err", err);
    res.status(500).json({ success: false, message: "Internal error" });
  }
});

module.exports = router;
