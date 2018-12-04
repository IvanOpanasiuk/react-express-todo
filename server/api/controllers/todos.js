const Todos = require("../../db/models/todos");
const mongoose = require("mongoose");

exports.getTodos = () =>
  new Promise(async (res, rej) => {
    try {
      const result = await Todos.find();
      res({ success: true, data: result });
    } catch (err) {
      rej(err);
    }
  });

exports.getTodoById = ({ id }) =>
  new Promise(async (res, rej) => {
    try {
      if (!id) {
        res({
          success: false,
          message: "Id is required"
        });
      }
      const result = await Todos.findById(id);
      res({ success: true, data: result });
    } catch (err) {
      rej(err);
    }
  });

exports.setTodo = ({ text, createdAt, done }) =>
  new Promise(async (res, rej) => {
    if (!text) {
      res({
        success: false,
        message: "Text is required"
      });
      return;
    }
    try {
      const newTodo = new Todos({
        text,
        createdAt,
        done
      });
      const result = await newTodo.save();
      res({ success: true, data: result });
    } catch (err) {
      rej(err);
    }
  });

exports.updateTodo = (body) =>
  new Promise(async (res, rej) => {
    try {
      if (!body.id) {
        res({
          success: false,
          message: "Id is required"
        });
      }
      if (body._id) {
        delete body._id;
        res({
          success: false,
          message: "You cant update Id"
        });
      }
      const result = await Todos.findByIdAndUpdate(body.id, { $set: body });
      res({ success: true, result });
    } catch (err) {
      rej(err);
    }
  });

exports.deleteTodo = ({ id }) =>
  new Promise(async (res, rej) => {
    try {
      if (!id) {
        res({
          success: false,
          message: "Id is required"
        });
      }
      const result = await Todos.findOneAndRemove({ _id: id });
      res({ success: true, data: result });
    } catch (err) {
      rej(err);
    }
  });
