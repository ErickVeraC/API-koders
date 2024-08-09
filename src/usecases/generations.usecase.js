const Generations = require("../models/generations.model");
const Mentor = require("../models/mentor.model");

const createError = require("http-errors");

async function create(data) {
  const existingGeneration = await Generations.findOne({
    number: data.number,
    program: data.program,
  });

  if (existingGeneration) {
    throw createError(409, "Generation already exists");
  }

  if (data.mentor) {
    const mentor = await Mentor.findById(data.mentor);
    if (!mentor) {
      throw createError(400, "Mentor not found");
    }
  }

  const newGeneration = await Generations.create(data);
  return newGeneration;
}

async function getAll() {
  const generations = await Generations.find({}).populate("mentor"); // populate para traer la información del mentor
  return generations;
}

async function getById(id) {
  const generation = await Generations.findById(id).populate("mentor");
  return generation;
}

async function updateById(id, newData) {
  const existingGeneration = await Generations.findById(id);

  if (!existingGeneration) {
    throw createError(404, "Generation not found");
  }

  if (data.number || data.program) {
    // Esto evalua si es un falsy o un truthy
    const number = data.number || existingGeneration.number;
    const program = data.program || existingGeneration.program;

    const conflictingGeneration = await Generations.findOne({
      number,
      program,
    });

    if (conflictingGeneration) {
      throw createError(
        409,
        `Another generation already has this number and program [${program} ${number}]`
      );
    }
  }

  if (data.mentor) {
    const mentor = await Mentor.findById(data.mentor);
    if (!mentor) {
      throw createError(400, "Mentor ID not found");
    }
  }

  const generationUpdated = await Generations.findByIdAndUpdate(id, newData, {
    new: true,
  });

  return generationUpdated;
}

async function deleteById(id) {
  const existingGeneration = await Generations.findById(id);

  if (!existingGeneration) {
    throw createError(404, "Generation not found");
  }

  const deleteGeneration = await Generations.findByIdAndDelete(id);
  return deleteGeneration;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
