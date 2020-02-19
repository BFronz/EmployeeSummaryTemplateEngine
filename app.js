const inquirer = require("inquirer");
const Manager  = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern   = require("./lib/Intern");
const render   = require("./lib/htmlRenderer");
const fs       = require("fs");
const myTeam   = [];



// start function use as init at bottom of page
function makeTeam () {
    
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamRole",
                message: "What is your role?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "End of team members"
                ]
            }
        ]).then(response => {
            switch (response.teamRole) {  // determines next function
                
                case "Manager":
                    makeManager();
                    break;

                case "Engineer":
                    makeEngineer();
                    break;

                case "Intern":
                    makeIntern();
                    break;

                case "End of team members":
                    console.log(myTeam);
                    render(myTeam);
                    break;
            }
        })

        function makeManager() {
            inquirer
                .prompt([    
                    {
                        type: "input",
                        message: "What is your name?",
                        name: "mgrName",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a name.';
                            }     
                            return true;
                          },
                    },   
                    {
                        type: "input",
                        message: "What is your employee ID?",
                        name: "mgrID",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a employee ID.';
                            }     
                            return true;
                          },
                    },   
                    {
                        type: "input",
                        message: "What is your email?",
                        name: "mgrEmail",
                        validate: function(value) {
                            var pass = value.match(
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            );
                            if (pass) {
                              return true;
                            }         
                            return 'Please enter a email address.';
                        }, 
                    },    
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "mgrOffice",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a office number.';
                            }     
                            return true;
                          },
                    }  
                ]).then(response => {
                    console.log(response);
    
                    const manager = new Manager(response.mgrName, response.mgrID, response.mgrEmail, response.mgrOffice);
    
                    myTeam.push(manager)
    
                    makeTeam();
                })
        }


        function makeEngineer() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your name?",
                        name: "engName",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a name.';
                            }     
                            return true;
                          },
                    },   
                    {
                        type: "input",
                        message: "What is the employee ID?",
                        name: "engID",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a employee ID.';
                            }     
                            return true;
                          },
                    },   
                    {
                        type: "input",
                        message: "What is the email?",
                        name: "Email",
                        validate: function(value) {
                            var pass = value.match(
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            );
                            if (pass) {
                              return true;
                            }         
                            return 'Please enter a email address.';
                        }, 
                    },    
                    {
                        type: "input",
                        message: "What is the GitHub ID?",
                        name: "engGitHub",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a GitHub ID.';
                            }     
                            return true;
                          },
                    }  
                ]).then(response => {
                    console.log(response);
    
                    const engineer = new Engineer(response.engName, response.engID, response.engEmail, response.engGitHub);
    
                    myTeam.push(engineer)
    
                    makeTeam();
                })
        }    
        
        function makeIntern() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is the Intern's name?",
                        name: "intName",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a name.';
                            }     
                            return true;
                          },
                    },   
                    {
                        type: "input",
                        message: "What is the employee ID?",
                        name: "intID",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a employee ID.';
                            }     
                            return true;
                          },
                    },   
                    {
                        type: "input",
                        message: "What is the email?",
                        name: "intEmail",
                        validate: function(value) {
                            var pass = value.match(
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            );
                            if (pass) {
                              return true;
                            }         
                            return 'Please enter a email address.';
                        }, 
                    },    
                    {
                        type: "input",
                        message: "What school did you  they attend?",
                        name: "intSchool",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a school.';
                            }     
                            return true;
                          },
                    }  
                ]).then(response => {
                    console.log(response);
    
                    const intern = new Engineer(response.intName, response.intID, response.intEmail, response.intSchool);
    
                    myTeam.push(intern)
    
                    makeTeam();
                })
        }               
    

       



}  // end make team






makeTeam();