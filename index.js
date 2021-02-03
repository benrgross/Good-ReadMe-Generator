const inquirer = require("inquirer");
const fs = require("fs");

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
const writeUserInfo = (userResponse) => {
  const text = `${userResponse.username}\n + ${userResponse.repoName}\n + ${userResponse.title}\n + ${userResponse.description}\n + ${userResponse.install}\n + ${userResponse.usage}\n + ${userResponse.license}`;
  fs.writeFile("userREADME.MD", text, (err) =>
    err ? console.log(error) : console.log("success")
  );
};
//========= USER INTERACTION =========
//inquirer .prompt

const questions = [
  // questions to user
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "username",
  },

  {
    type: "input",
    message: "What is the name of your Github Repository?",
    name: "repoName",
    default: "Good-ReadMe-Generator",
  },

  {
    type: "input",
    message: "Provide the project title",
    name: "title",
    default: "Generate a Good README ",
  },

  {
    type: "input",
    message: "Provide a description",
    name: "description",
    default:
      " A Good ReadMe file is generated when input is provided from the prompts",
  },

  {
    type: "input",
    message: "What are the installation requirements?",
    name: "install",
    default: "initialize npm --> install inquirer --> open node index.js",
  },
  {
    type: "input",
    message: "Describe the instructions for usage.",
    name: "usage",
    default:
      "Open file index in terminal --> run node index ---> answer the prompts --> generate your README.ms file  ",
  },

  {
    type: "input",
    message:
      "Enter the GitHub user names of any contributes (sepperate by comas)",
    name: "contributors",
    default: " Ben Gross, Benjamin Wright and Micky Mouse",
  },

  {
    type: "input",
    message: "Provide test instructions",
    name: "test",
    default: "Insert your test example here.",
  },
  {
    type: "list",
    message: "please pick a license",
    choices: ["MIT", "Apache 2.0", "GNU GPL v3.0"],
    name: "license",
    default: "MIT",
  },
];

inquirer.prompt(questions).then((response) => {
  writeUserInfo(response);
});
