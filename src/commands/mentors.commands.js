const mentorUseCases = require("../usecases/mentors.usecase");
const getArgValue = require("../lib/getArgValue");

async function add() {
  const firstName = getArgValue("firstName");
  const lastName = getArgValue("lastName");
  const email = getArgValue("email");

  const newMentor = await mentorUseCases.create({ firstName, lastName, email });

  console.log("Mentor created");
  console.log(newMentor);
  process.exit(0);
}

async function rm() {
  const id = getArgValue("id");

  const mentorDeleted = await mentorUseCases.deleteById(id);

  console.log("Mentor deleted");
  console.log(mentorDeleted);
  process.exit(0);
}

async function ls() {
  const mentors = await mentorUseCases.getAll();

  console.log(mentors);
  process.exit(0);
}

module.exports = { add, rm, ls };
