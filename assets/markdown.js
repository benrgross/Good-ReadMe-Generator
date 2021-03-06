const generateMarkDown = (userResponse) => {
  // --- switch case for assigning license badge ---
  let badgeLink;
  switch (userResponse.license) {
    case "MIT":
      badgeLink =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      badgeLink =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPL v3.0":
      badgeLink =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla Public License 2.0":
      badgeLink =
        "[[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      badgeLink =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  // --- add table of contents if the user inputs response ---
  let tableOFContents = `## Table of Contents`;

  if (userResponse.description !== "") {
    tableOFContents += `
  * [Description](#description)`;
  }
  if (userResponse.license !== "") {
    tableOFContents += ` 
  * [Installation](#installation)`;
  }
  if (userResponse.usage !== "") {
    tableOFContents += ` 
  * [Usage](#usage)`;
  }
  if (userResponse.tests !== "") {
    tableOFContents += ` 
  * [Tests](#tests)`;
  }
  if (userResponse.contributors !== "") {
    tableOFContents += ` 
  * [Contributors](#contributors)`;
  }
  if (userResponse.license !== "") {
    tableOFContents += ` 
  * [License](#license)`;
  }
  if (userResponse.username !== "") {
    tableOFContents += ` 
  * [Questions](#questions)`;
  }

  let markDownTemp =
    // ---- Mark Down Rendering ----
    `
  # ${userResponse.title}

  `;
  //add table of contents
  markDownTemp += tableOFContents;

  //add description
  if (userResponse.description !== "") {
    markDownTemp += `

  ## Description

  ${userResponse.description}`;
  }

  //add installation
  if (userResponse.install !== "") {
    markDownTemp += `

  ## Installation

  ${userResponse.install}`;
  }
  //add Usage
  if (userResponse.usage !== "") {
    markDownTemp += `

  ## Usage 

  ${userResponse.usage}`;
  }
  //add Tests
  if (userResponse.tests !== "") {
    markDownTemp += `

  ## Tests 

  ${userResponse.tests}`;
  }
  //add Contributors
  if (userResponse.contributors !== "") {
    markDownTemp += `

  ## Contributors 

  ${userResponse.contributors}`;
  }
  //add License
  markDownTemp += `

  ## License

  ${badgeLink}`;
  //add Questions
  if (userResponse.questions !== "") {
    markDownTemp += `

  ## Questions 

  *Any questions can be directed at the info below:*

  GitHub: @${userResponse.username}`;
  }

  // add email
  if (userResponse.email !== "") {
    markDownTemp += `

  email: ${userResponse.email}`;
  }
  return markDownTemp;
};
module.exports = generateMarkDown;
