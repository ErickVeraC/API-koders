const express = require("express");
const createError = require("http-errors");

const mentorsUseCases = require("../usecases/mentors.usecase");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const mentors = await mentorsUseCases.getAll();
    response.json({
      success: true,
      message: "All mentors",
      data: {
        mentors,
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
    const mentor = await mentorsUseCases.getById(id);

    if (!mentor) {
      throw createError(404, "Mentor not found");
    }

    response.json({
      success: true,
      message: "Mentor by ID",
      data: {
        mentor,
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
    const newMentor = await mentorsUseCases.create(newData);

    response.json({
      success: true,
      message: "Mentor created",
      data: {
        mentor: newMentor,
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
    const mentorData = request.body;

    const mentorUpdate = await mentorsUseCases.updateById(id, mentorData);

    response.json({
      success: true,
      message: "Mentor updated",
      data: {
        mentor: mentorUpdate,
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

    const mentorDeleted = await mentorsUseCases.deleteById(id);

    response.json({
      success: true,
      message: "Mentor deleted",
      data: {
        mentor: mentorDeleted,
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
