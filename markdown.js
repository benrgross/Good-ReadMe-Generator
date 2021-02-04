const generateMarkDown = (userResponse) => {
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

  const markDownTemp = `${userResponse.username}
  more text here \n  ${userResponse.repoName}\n ${userResponse.title}\n ${userResponse.description}\n ${userResponse.install}\n   ${userResponse.usage}\n ${badgeLink}`;

  return markDownTemp;
};
module.exports = generateMarkDown;
