//Function that returns the badge link along with markdown formatting, if there is no license than it is an empty string
function renderLicenseBadge(license) {
  badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    Apache: '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    Boost: '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    Mozilla: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
  };
  if (!license){
    return '';
  } else {
    // badges.license doesnt work, when using a variable in the parameter .noation will return undefined, bracket notation is required
    badges[license];
  }
}


//Function to return the url for chosen license, otherwise it returns an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    Boost: 'https://www.boost.org/LICENSE_1_0.txt',
    Mozilla: 'https://opensource.org/licenses/MPL-2.0',
  }
  if (!license) {
    return '';
  } else {
    return links[license]
  }

}

// Function that creates the license section, while calling the licenceLink function to generate everything thats needed for that section
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (!license) {
    return '';
  } else {
    
    return `## License

This Project is licensed by ${license} license.
Follow the link for more information: ${licenseLink}
`;
  };
}

// Function that creates the string to be written to the readme file
function generateMarkdown(data) {
  //variables and function calls to hold licence info
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);


  return `# ${data.title}
  ${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile [here](https://github.com/${data.github}).

`;
}

//exports this function to wherever it is in a require call, in this case the index file
module.exports = generateMarkdown;
