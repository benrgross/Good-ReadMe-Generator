# Good README Generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Questions](#questions)

## Description

This application allows the user to download this repository from GitHub and run it on their machine to generate a ReadMe for their desired project. After answering the prompts in their node terminal, the answers are compiled and placed into a formatted .md file using markdown syntax. Once a GitHub user name is obtained, the user is then prompted to provide inputs for: Description, Installation, Usage, Contributors, Licence and Questions. If a user deicides to leave an input blank, the section will not appear in the table of contents and the section will be omitted from the template. The Licence question, prompts the user with a list of which they are able to choose the desired licence by scrolling with the arrow keys. If a licence is not chosen it will add an MIT licence badge by default. When the user is finished answering the prompts, the ReadMe file is created and written, inserting their inputs into the corresponding section of the formatted readme page.

This application utilizes Node.js and the inquirer package. These two application allow function to be deployed in the terminal. Using javaScript ES6, const, let, arrow function promises were utilized to carry out the functionality of this application. The application uses modularization by generating the markdown in separate module called markdown.js.

## Installation

To the install the application, the user must download the repository from GitHub, and in that file, install the inquire package by typing "npm install inquirer" in their terminal.

## Usage

![alt-text](/assets/gif/Good-ReadMe.gif)

Once the corresponding node modules are present in the file, the user can type "node index" in their terminal. When node index is typed the application will run.

When started the user is prompted for the their username. The user must type and input to continue with the prompts. From there follow the prompts and answer any that apply to your project. When a prompt is left blank, the corresponding section of the ReadMe will be omitted.

This application is intended to generate a nicely formatted ReadMe for the user. The quality of this ReadMe is based on parameters provided by the Columbia School of Engineering Web Development Boot Camp, powered by Trilogy. This ReadMe is not intended to meet the standards of all institutions and businesses. Use your discretion in maintaining or omitting any parts of this ReadMe file that are generated for the user.

## Contributors

Contributors are welcome to fork this repository and submit a pull a request with any desired additions to applicators. If accepted their names and contact information (if provided) will be added to the list of contributes.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

_Any questions can be directed at the info below:_

github: @benrgross

email: bengross@gmail.com
