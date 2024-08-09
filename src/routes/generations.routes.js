const express = require("express");

const generationsUseCases = require("../usecases/generations.usecase");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const generations = await generationsUseCases.getAll();
    response.json({
      success: true,
      message: "All generations",
      data: {
        generations,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generation = await generationsUseCases.getById(id);

    if (!generation) {
      throw createError(404, "Generation not found");
    }

    response.json({
      success: true,
      message: "Generation by ID",
      data: {
        generation,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newData = request.body;
    const newGeneration = await generationsUseCases.create(newData);

    response.json({
      success: true,
      message: "Generation created",
      data: {
        generation: newGeneration,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const newData = request.body;
    const generationUpdated = await generationsUseCases.updateById(id, newData);

    response.json({
      success: true,
      message: "Generation updated",
      data: {
        generation: generationUpdated,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generationDeleted = await generationsUseCases.deleteById(id);

    response.json({
      success: true,
      message: "Generation deleted",
      data: {
        generation: generationDeleted,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
