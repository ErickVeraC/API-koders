const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    match: RegExp(".*@.*..*"),
  },
  password: {
    // la contraseña encriptada
    type: String,
    required: true,
    select: false, // para que no se muestre en las respuestas
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// para el modelo necesitamos el nombre de la colección y el esquema
module.exports = mongoose.model("Koder", koderSchema);
// usando nuestro modelo vamos a poder comunicarnos con nuestra base de datos
// - crear nuevos documentos
// - buscar documentos
