const createError = require("http-errors");

const kodersUseCases = require("../usecases/koders.usecase");

const jwt = require("../lib/jwt");

function auth(request, response, next) {
  try {
    const authorization = request.headers.authorization; // Corregir acceso a headers

    const token = authorization?.replace("Bearer ", ""); // ? es para preguntar si existe

    if (!token) {
      throw createError(401, "Token is required");
    }

    const payload = jwt.verify(token);

    const koder = kodersUseCases.getById(payload.id);
    request.koder = koder;

    next();
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = auth;
