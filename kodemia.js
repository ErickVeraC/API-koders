// CLI
// Nos permitira administrar los recursos de kodemia
// - koders
//  - add (koders add --name=[name] --email=[email])
//  - rm (koders rm --id=[id])
//  - ls
// - mentors
//  - add (mentors add --name=[name] --email=[email])
//  - rm (mentors rm --id=[id])
//  - ls
// - generations

require("dotenv").config();

const db = require("./src/lib/db");

const kodersActions = require("./src/commands/koders.commands");
const mentorsActions = require("./src/commands/mentors.commands");

const getArgValue = require("./src/lib/getArgValue");

const resource = process.argv[2]; // koders, mentors, generations
const action = process.argv[3]; // add, rm, ls

const allowedActions = {
  koders: kodersActions,
  mentors: mentorsActions,
  generations: {},
};

db.connect()
  .then(async () => {
    console.log("DB Connected");

    const resourceActions = allowedActions[resource];

    if (!resourceActions) {
      console.error(`Unknown resource ${resource}`);
      process.exit(3);
    }

    const requestedAction = resourceActions[action];

    if (!requestedAction) {
      console.error(`Unknown action ${action}`);
      process.exit(2);
    }

    await requestedAction();
  })
  .catch((error) => {
    console.error("DB Connection error:", error);
    process.exit(1);
  });

// Promises

// son objetos que representan la terminación o el fracaso de una operación asíncrona

// estados de una promesa
// - pending
//  - resolved (fulfilled) .then(function (resultado))
//  - rejected (rejected). catch(function (error))
