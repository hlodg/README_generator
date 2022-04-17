// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 let licensebutton;
function renderLicenseBadge(license) { 
  if(licenseName==="MIT"){
    if(licenseName==="MIT"){
      licensebutton = [![MIT]('https://img.shields.io/badge/License-MIT-yellowgreen')];
    }
  }
  else if (licenseName==="GPLv2"){
    licensebutton = [![GPLv2]('https://img.shields.io/badge/License-GPLv2-orange')];
  }
  else if (licenseName==="Apache"){
    licensebutton = [![Apache]('https://img.shields.io/badge/License-Apache-blueviolet')];
  }
  else{
    return ''
  }
}


let link;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseName=license.choices;
//   if(licenseName==="MIT"){
//     link = 'https://img.shields.io/badge/License-MIT-yellowgreen'
//   }
//   else if (licenseName==="GPLv2"){
//     link = 'https://img.shields.io/badge/License-GPLv2-orange'
//   }
//   else if (licenseName==="Apache"){
//     link = 'https://img.shields.io/badge/License-Apache-blueviolet'
//   }
//   else {
//     return '';
//   }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license){
      return ${[licensebutton]};
    }
    else{
      return '';
    }
}

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
  ${[license]};

  `;
}

module.exports = generateMarkdown;
