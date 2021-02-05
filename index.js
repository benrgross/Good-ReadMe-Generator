//--- Connect to methods and external functions ---

const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./assets/markdown");

// write userInfo Function
const writeUserInfo = (response) => {
  fs.writeFile("userREADME.MD", markdown(response), (err) =>
    err ? console.log(error) : console.log("Generating README.md")
  );
};

//--- Array of prompts ---
const questions = [
  // questions to user
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must include a GitHub username");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please provide your email:",
    name: "email",
  },

  {
    type: "input",
    message: "Provide the project title:",
    name: "title",
    default: "README",
  },

  {
    type: "input",
    message: "Provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Detail the installation requirements:",
    name: "install",
  },
  {
    type: "input",
    message: "Describe the instructions for usage:",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Explain to the reader how hey can contribute to this application:",
    name: "contributors",
  },
  {
    type: "input",
    message: "Provide testing instructions:",
    name: "tests",
  },
  {
    type: "list",
    message: "Please pick a license (MIT applied by default)",
    choices: [
      "MIT",
      "Apache 2.0",
      "Mozilla Public License 2.0",
      "GNU GPL v3.0",
    ],
    name: "license",
    default: "MIT",
  },
];

// --- Initiate inquirer prompt and response rendering ---
inquirer.prompt(questions).then((response) => {
  //--- Call writing to fs function ---
  writeUserInfo(response);
});
