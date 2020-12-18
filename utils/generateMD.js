//function to generate the markdown file from user input
function generateMD(data) {
    return `# ${data.Title}

    ##Table of Contents
    1. [Description](${data.Describe})
    2. [Installation](${data.Installation})
    3. [Usage](${data.Usage})
    4. [License's](${data.License})
    5. [Contributers](${data.Credits})
    6. [Github Handle](${data.Github})
    7. [Email](${data.Email})

    ##Questions
    If you have further questions please contact me at ${data.Email}.

    ##Description
    ${data.Describe}

    ## Installation
    ${data.Installation}

    ## Usage
    ${data.Usage}

    ##License's
    ${data.License}

    ##Contributions
    ${data.Credits}

    ##Github contact
    ${data.Github}

    ##Email Address
    ${data.Email}
  
  `;
  }


  //exports this too index.js
  module.exports = generateMD;
  