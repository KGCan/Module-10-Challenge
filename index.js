//Link to page structure
const pageStructure = require ("./src/page-structure")

//Team files
const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

//Modules & packages
const inquirer = require (inquirer);
const fs = require ("fs");
const path = require ("path");

// Create Directory
const dataDirectory = path.resolve(__dirname, "newteam");
const dataPath = path.join(dataDirectory, "team.html");

// Team array
const teamList = [];
const dataArray = [];

// Function for Main Menu
function mainMenu () {

    function newManager() {
        console.log("Get ready to create your team!");
        inquirer.prompt([
          {
            type: "input",
            name: "managerName",
            message: "Please enter the name of the team Manager",
            validate: userInput => {
              if (userInput !== "") {
                return true;
              }
              return "Please enter the manager's name";
            }
          },
          {
            type: "input",
            name: "managerId",
            message: "Enter the manager's ID",
            validate: userInput => {
              const valid = userInput.match(
                /^[1-9]\d*$/
              );
              if (valid) {
                return true;
              }
              return "The ID number you entered is not valid, please try again";
            }
          },
          {
            type: "input",
            name: "managerEmail",
            message: "Please enter the manager's email",
            validate: userInput => {
              const valid = userInput.match(
                /\S+@\S+\.\S+/
              );
              if (valid) {
                return true;
              }
              return "The email you entered is invalid, please try again";
            }
          },
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: userInput => {
              const valid = userInput.match(
                /^[1-9]\d*$/
              );
              if (valid) {
                return true;
              }
              return "Please enter a valid office number";
            }
          }
        ]).then(userInputs => {
          const manager = new Manager(userInputs.managerName, userInputs.managerId, userInputs.managerEmail, userInputs.managerOfficeNumber);
          teamList.push(manager);
          dataArray.push(userInputs.managerId);
          buildTeam();
        });
      }
    
      function buildTeam() {
    
        inquirer.prompt([
          {
            type: "list",
            name: "employeeRole",
            message: "What is the role of the employee you would like to add?",
            choices: [
              "Engineer",
              "Intern",
              "None, I am done adding to this team"
            ]
          }
        ]).then(userChoice => {
          switch (userChoice.employeeRole) {
            case "Engineer":
              newEngineer();
              break;
            case "Intern":
              newIntern();
              break;
            default:
              newTeam();
          }
        });
      }
    
      function newEngineer() {
        inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's name",
            validate: userInput => {
              if (userInput !== "") {
                return true;
              }
              return "Please enter a valid response";
            }
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?",
            validate: userInput => {
              const valid = userInput.match(
                /^[1-9]\d*$/
              );
              if (valid) {
                if (dataArray.includes(userInput)) {
                  return "This ID is invalid, please enter a new value";
                } else {
                  return true;
                }
    
              }
              return "ID must be greater than zero";
            }
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "The email you entered is invalid, please try again",
            validate: userInput => {
              const valid = userInput.match(
                /\S+@\S+\.\S+/
              );
              if (valid) {
                return true;
              }
              return "Please enter a valid email address";
            }
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: userInput => {
              if (userInput !== "") {
                return true;
              }
              return "Please enter a valid username";
            }
          }
        ]).then(userInputs => {
          const engineer = new Engineer(userInputs.engineerName, userInputs.engineerId, userInputs.engineerEmail, userInputs.engineerGithub);
          teamList.push(engineer);
          dataArray.push(userInputs.engineerId);
          buildTeam();
        });
      }
    
      function newIntern() {
        inquirer.prompt([
          {
            type: "input",
            name: "internName",
            message: "Please enter the intern's name",
            validate: userInput => {
              if (userInput !== "") {
                return true;
              }
              return "The intern's name must include at least 2 letters";
            }
          },
          {
            type: "input",
            name: "internId",
            message: "Please enter the intern's ID",
            validate: userInput => {
              const valid = userInput.match(
                /^[1-9]\d*$/
              );
              if (valid) {
                if (dataArray.includes(userInput)) {
                  return "This ID is invalid, please enter a new ID";
                } else {
                  return true;
                }
    
              }
              return "ID must be a positive number greater than zero";
            }
          },
          {
            type: "input",
            name: "internEmail",
            message: "Please enter the intern's email",
            validate: userInput => {
              const valid = userInput.match(
                /\S+@\S+\.\S+/
              );
              if (valid) {
                return true;
              }
              return "The email you entered is invalid, please try again";
            }
          },
          {
            type: "input",
            name: "internSchool",
            message: "Please enter the name of your intern's school",
            validate: userInput => {
              if (userInput !== "") {
                return true;
              }
              return "The school name must be greater than 2 characters";
            }
          }
        ]).then(userInputs => {
          const intern = new Intern(userInputs.internName, userInputs.internId, userInputs.internEmail, userInputs.internSchool);
          teamList.push(intern);
          dataArray.push(userInputs.internId);
          buildTeam();
        });
      }
    
      function newTeam() {
        if (!fs.existsSync(dataDirectory)) {
          fs.mkdirSync(dataDirectory)
        }
        fs.writeFileSync(dataPath, pageStructure(teamList), "utf-8");
      }
    
      newManager();
    
    }
    
    mainMenu();
    