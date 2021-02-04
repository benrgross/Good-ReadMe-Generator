const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./markdown");

// -------- connect to api file
//--------- connect to markdown file

// ----------------------- README.md is generated with the: ---------------
//------ title of my project ---> input => title of ReadME
//------------------------- and sections: --------------------------------
//------- Description ----> input => text put in section
//------- Table of Contents ---> click => taken to section
//------- Installation ---> input instructions => text put in section
//------- Usage  ---------> input => text put in section
//------- License --------> Choice of lisence --> add badge
//------- Contributing Guidelines  -------> input => put in section
//------- Tests instructions ------> input => put in section
//------- Questions ----> input: GitHub User Name and Email => put in section

// ========= FUNCTIONS ===============
// write userInfo Function
const writeUserInfo = (response) => {
  fs.writeFile("userREADME.MD", markdown(response), (err) =>
    err ? console.log(error) : console.log("success")
  );
};
//========= USER INTERACTION =========
//inquirer .prompt

const questions = [
  // questions to user
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
  },

  {
    type: "input",
    message: "Please provide your email",
    name: "email",
  },

  {
    type: "input",
    message: "Provide the project title",
    name: "title",
  },

  {
    type: "input",
    message: "Provide a description",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation requirements?",
    name: "install",
  },
  {
    type: "input",
    message: "Describe the instructions for usage.",
    name: "usage",
  },

  {
    type: "input",
    message: "Explain to the reader how hey can contribute to this application",
    name: "contributors",
  },
  {
    type: "input",
    message: "Provide testing instructions",
    name: "tests",
  },
  {
    type: "list",
    message: "Please pick a license (will apply MIT by default)",
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

inquirer.prompt(questions).then((response) => {
  writeUserInfo(response);
});
