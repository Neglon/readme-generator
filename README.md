# README Generator

## Description
    - As a developer I wanted a README Generator 
    - This project was built to allow users to quickly enter information via propmted questions to fill out the body of a README and then write all that info to a README.md file to produce a professionly built README.
    - This project was able to solve how to prompt users with questions, take those answers and place them into a string that was mostly filled out. To solve the placement, string interpolation was used for each individual data point. This project also solved how to call functions from a seperate js file and excute them with the data from the current js file.  
    - This project allowed me to learn how to write an entire page of a file, in this case a readme, by using a single string containing all of the necessary framework. I learned how to use the inquierer package to prompt the user with questions and then take that data and using template literals place that data into the aformentioned string to populate the file correctly. I also learned how to us the fs package to actually write that string to a file that is created, in this case a readme.md.
    

## Installation
    To install this follow the link to the github repository below.
[README Generator](https://github.com/Neglon/readme-generator)
Clone the files to you pc. Make sure that you are running node.js on your machine. 
[Node JS](https://nodejs.org/en)
Using a something like Virtual Studio Code, navigate to the develop folder via the command line interface/terminal. Once inside, run 'npn install inquierer' to install the necessary package. There should now be a packag-lock.json file and a node modules folder in addition to what was cloned. You are ready to run the program.

## Usage
    Assuming you are still in the develop folder from installing the package you may run the program. If not navigate to the develop folder to have access to index.js. Type 'node index.js' into the CLI. You will then be prompted with a series of questions. Answer each question as it pertains to the question. Once all questions are answered, the CLI will read README created! A new file named README.md should have appeared in the develop folder, containg a completed README with the information you included in it.
   

   

## Credits
    N/A

## Liscence
    N/A

## Code Source
    Code fully written by Thomas Neylon, references were made to previous classwork, and and the websites below. The readme structure was based off of: 
    
[README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
   
[Badges and Licenses](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

[Dot Notation vs Bracket Notation](https://medium.com/@maxheadway/the-differences-between-dot-notation-and-bracket-notation-in-javascript-45b07a49ebc9#:~:text=Dot%20notation%20is%20faster%20and,and%20can%20be%20more%20verbose)

