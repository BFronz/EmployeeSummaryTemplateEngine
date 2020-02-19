const inquirer = require("inquirer");
const Manager  = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern   = require("./lib/Intern");
const render   = require("./lib/htmlRenderer");
const fs       = require("fs");
const myTeam   = [];



// starter function, called at bottom of page, allows manager to build team
function makeTeam () {
    
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamRole",
                message: "Please select an employee role to start.",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "End of team members"
                ]
            }
        ]).then(response => {
            switch (response.teamRole) {  // determines next function used to gather data
                
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

                    // array myTeam is complete at this point to, time to build html
                    render(myTeam);
                    break;
            }
        })

        function makeManager() {  // manager prompt
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
                    
                    // pass manager responses into Manager class (extends Employee), object that comes back is then added to myTeam array 
                    const manager = new Manager(response.mgrName, response.mgrID, response.mgrEmail, response.mgrOffice);
    
                    myTeam.push(manager)
    
                    makeTeam();
                })
        }


        function makeEngineer() {  // engineer prompt
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What the engineer's name?",
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
                        message: "What is their employee ID?",
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
                        message: "What is their email?",
                        name: "engEmail",
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
                        message: "What is their GitHub ID?",
                        name: "engGitHub",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a GitHub ID.';
                            }     
                            return true;
                          },
                    }  
                ]).then(response => {
                    
                    // pass engineer responses into Engineer class (extends Employee), object that comes back is then added to myTeam array 
                    const engineer = new Engineer(response.engName, response.engID, response.engEmail, response.engGitHub);
    
                    myTeam.push(engineer)
    
                    makeTeam();
                })
        }    
        
        function makeIntern() {  // intern prompt
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
                        message: "What is their employee ID?",
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
                        message: "What is their email?",
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
                        message: "What school did they attend?",
                        name: "intSchool",
                        validate: function(text) {
                            if (text === "") {
                              return 'You must enter a school.';
                            }     
                            return true;
                          },
                    }  
                ]).then(response => {
                    
                    // pass  intern responses into Intern class (extends Employee), object that comes back is then added to myTeam array 
                    const intern = new Intern(response.intName, response.intID, response.intEmail, response.intSchool);
    
                    myTeam.push(intern)
    
                    makeTeam();
                })
        }               
    

}  // end make team



makeTeam();