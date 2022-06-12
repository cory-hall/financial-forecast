  # Financial Forecast

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
  This is a budget tracking app that has offline capabilities put in place allowing more freedom for the users. In times of spotty internet connection, the browser saves any inputs and will automatically update the database when the user gets a reliable internet signal again. This is done using the browsers build in IndexedDB functionality alongside MongoDB and a service worker to serve the webpage and stored data when in offline mode. The only caveat at the moment is that the displayed data will NOT be updated if it is put in while offline. An internet connection is required to update the database.

  ## Technologies Used
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  * Ensure you have MongoDB installed on your machine
  * Clone the repo
  * Input `npm i` into the terminal
  * You can then run this app locally on your machine at `localhost:3001` by running `npm start` in your terminal

  ## Usage
  You can either follow the above steps to run it locally, or to see it in live production visit [Heroku](https://intense-temple-00113.herokuapp.com/).

  ## Tests
  There are no testing features included with this app.

  ## Questions
  Any questions can be directed at the primary author via: <br>
  [GitHub](https://github.com/cory-hall) <br>
  [Contact Me!](mailto:cory.c.hall@gmail.com)

  ## Credits
  Cory Hall

  ## License
  Copyright 2022 Cory Hall

        Permission is hereby granted, free of charge, to any person obtaining a copy of this 
        software and associated documentation files (the "Software"), to deal in the Software 
        without restriction, including without limitation the rights to use, copy, modify, 
        merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
        permit persons to whom the Software is furnished to do so, subject to the following 
        conditions:
        
        The above copyright notice and this permission notice shall be included in all 
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
        PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
        FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
        OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
        DEALINGS IN THE SOFTWARE.