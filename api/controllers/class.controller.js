import Class from "../models/class.model.js";
import { errorHandler } from "../utils/error.js";
import { ObjectId } from "mongodb";

export const createClass = async (req, res, next) => {
  try {
    const newClass = await Class.create(req.body);
    return res.status(201).json(newClass);
  } catch (error) {
    next(error);
  }
};

export const deleteClass = async (req, res, next) => {
  const _class = await Class.findById(req.params.id);

  if (!_class) {
    return next(errorHandler(404, "Class not found"));
  }

  const requestUserId = ObjectId.createFromHexString(req.user.id);

  if (!requestUserId.equals(_class.createdBy)) {
    return next(errorHandler(401, "You can only delete your owm class"));
  }

  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json("Class has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updateClass = async (req, res, next) => {
  const _class = await Class.findById(req.params.id);

  if (!_class) {
    return next(errorHandler(404, "Class not found"));
  }
  const requestUserId = ObjectId.createFromHexString(req.user.id);

  if (!requestUserId.equals(_class.createdBy)) {
    return next(errorHandler(401, "You can only update your owm class"));
  }

  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedClass);
  } catch (error) {
    next(error);
  }
};

export const getClass = async (req, res, next) => {
  try {
    const _class = await Class.findById(req.params.id);
    if (!_class) {
      return next(errorHandler(404, "Class not found"));
    }
    res.status(200).json(_class);
  } catch (error) {
    next(error);
  }
};
