// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license_name) {
  // https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license){}

  // https://img.shields.io/badge/License-MIT-yellowgreen
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(answers) {
  return `
  # ${answers.name}

  ## Description
  ${answers.description}

  ## Table of Contents (Optional)


  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License


  `;
}

module.exports = generateMarkdown;
