const Mentor = require("../models/mentor.model");

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
  const mentor = await Mentor.findByIdAndUpdate(id, newData, { new: true }); // new: true para que nos devuelva el documento actualizado
}

async function deleteById(id) {
  const mentor = await Mentor.findByIdAndDelete(id);
  return mentor;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
