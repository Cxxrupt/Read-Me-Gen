
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache 2.0") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "GPL 3.0") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if (license === "BSD 3") {
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    } else if (license === "None") {
      return "";
    }
  }
  
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "[MIT](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
      return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL 3.0") {
      return "[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "BSD 3") {
      return "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === "None") {
      return "";
    }
  }
  
  function renderLicenseSection(license) {
    if (license === "None") {
      return "";
    } else {
      return `## License

This project is licensed under the ${license} license. See the [LICENSE](${renderLicenseLink(license)}) file for details.`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;