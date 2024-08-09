const Mentor = require("../models/mentor.model");
const createError = require("http-errors");

async function create(data) {
  // find -> regresa un arreglo
  // findOne -> regresa un objeto o null
  const existingMentor = await Mentor.findOne({ email: data.email });

  if (existingMentor) {
    throw createError(409, "Mentor already exists");
  }

  const newMentor = await Mentor.create(data);
  return newMentor;
}

async function getAll() {
  const mentors = await Mentor.find({});
  return mentors;
}

async function getById(id) {
  const mentor = await Mentor.findById(id);
  return mentor;
}

async function updateById(id, newData) {
  const mentorFound = await Mentor.findById(id);

  if (!mentorFound) {
    throw createError(404, "Mentor not found");
  }
  const mentorUpdated = await Mentor.findByIdAndUpdate(id, newData, {
    new: true,
  }); // new: true para que nos devuelva el documento actualizado
  return mentorUpdated;
}

async function deleteById(id) {
  const mentor = await Mentor.findById(id);

  if (!mentor) {
    throw createError(404, "Mentor not found");
  }

  const deleteMentor = await Mentor.findByIdAndDelete(id);
  return deleteMentor;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
