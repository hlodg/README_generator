// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if(license==="MIT"){
    return '![](https://img.shields.io/badge/License-MIT-yellowgreen)'
  }
  else if (license==="GPLv2"){
    return'![](https://img.shields.io/badge/License-GPLv2-orange)'
  }
  else if (license==="Apache"){
    return '![](https://img.shields.io/badge/License-Apache-blueviolet)'
  }
  else {
    return '';
  }
}



//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `- [License](#license)`
  }
  else {
    return ``
  }
}

//  Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This license is ${license}.`
}

function generateMarkdown(answers) {
  return `
  # ${answers.name}

${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents (Optional)


  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
${renderLicenseLink(answers.license)}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License
  ${renderLicenseSection(answers.license)}
  `;
}

module.exports = generateMarkdown;
