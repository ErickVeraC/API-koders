const Koder = require("../models/koder.model");

const createError = require("http-errors");

const encryption = require("../lib/encryption");

const jwt = require("../lib/jwt");

async function login(data) {
  const koder = await Koder.findOne({ email: data.email }).select("+password"); // el + es para que le agregue el campo password y select es para que lo muestre

  if (!koder) {
    throw createError(401, "Invalid credentials");
  }

  const isValidPassword = encryption.compare(data.password, koder.password);

  if (!isValidPassword) {
    throw createError(401, "Invalid credentials");
  }

  const token = jwt.sign({ id: koder._id });

  // retornar un token
  return token; // regresa un booleano
}

async function signup(data) {
  // revisar que no exista un koder con el mismo email
  // encryptar la contraseña del koder
  // crear el documento del koder
  const koderFound = await Koder.findOne({ email: data.email });

  if (koderFound) {
    throw createError(409, "user already exists");
  }

  if (!data.password) {
    throw createError(400, "password is required");
  }

  if (data.password.length < 6) {
    throw createError(400, "password must be at least 6 characters long");
  }

  const password = encryption.encrypt(data.password); // encriptarlo

  data.password = password;

  const newKoder = await Koder.create(data);

  return newKoder;
}

async function create(data) {
  const newKoder = await Koder.create(data);
  return newKoder;
}

async function getAll() {
  const koders = await Koder.find({});
  return koders;
}

async function getById(id) {
  const koder = await Koder.findById(id);
  return koder;
}

async function updateById(id, newData) {
  const koderFound = await Koder.findById(id);

  if (!koderFound) {
    throw createError(404, "Koder not found");
  }
  const koder = await Koder.findByIdAndUpdate(id, newData, { new: true }); // new: true para que nos devuelva el documento actualizado
}

async function deleteById(id) {
  const koder = await Koder.findById(id);

  if (!koder) {
    throw createError(404, "Koder not found");
  }

  const deleteKoder = await Koder.findByIdAndDelete(id);
  return deleteKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  signup,
  login,
};

// top level await es cuando usamos await en el scope global y no dentro de una función, esto no es posible en node.js.
// Necesitamos marcar la funcion padre como async para poder usar await
