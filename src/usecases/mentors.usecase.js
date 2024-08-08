const Mentor = require("../models/mentor.model");
const createError = require("http-errors");

async function create(data) {
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
  const mentor = await Mentor.findByIdAndUpdate(id, newData, { new: true }); // new: true para que nos devuelva el documento actualizado
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
