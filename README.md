# Good README Generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributors](#contributors)
- [License](#license)
- [Questions](#questions)

## Description

This application allows the user to download this repository from GitHub and run it on thier machine to generatea a ReadMe for thier desired project. After answering the promps in their node terminal, the answers are compiled and placed into a formatted .md file, using markdown syntax. Using Node.js with the inquirer package, the user is prompted to input thier, GitHub username. Using an authenticication function, the function will continue to prompt the user for thier GitHub user name until they input an answer. Once a GitHub user name is obtained, the user then prompted to proivide inputs for: Drescription, Instalation, Usage, Contributors, Lisence and Questions. If a user descides to leave an input black, the section will not appear in the table of contents. The Lisence questions, prompts the user with a list of which they are able to choose the desired lisence by scroling with the arrow keys. If a lisence is not chosen it will add an MIT lisence badge by default. When the user is finished answering the prompts, the ReadMe file is created and written, inserting thier inputs into the cooresponding section of the formatted readme page.

## Installation

To the install the application, the user must download the respository from GitHub, and in that file, install the inquier packgage using npm install inquirer in their terminal. Once the cooresponding node_modules are presents in the file, the user can type "node index.js" in their terminal, opened to that file. When node index is typed the application will run.

## Usage

![alt-text](/assets/gif/Good-ReadMe.gif)

This application is intended to generate a nicely formatted ReadMe for the user. The quality of this ReadMe is based on parameters provided by the Columbia School of Engineering Web Development Boot Camp, powered by Trilogy. This ReadMe is not intended to meet the standards of all intitutions and bussinesses. Use your discretion in maintaining of omitting any parts of this ReadMe file that is gennerated for the user.

## Contributors

Contributer are welcome to fork this reposository and submit a pull a request with any desired additions to applicatons. If accepted thier names and contact information (if provided) will be added to the list of contributers.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

_Any questions can be directed at the info below:_

github: @benrgross

email: bengross@gmail.com
