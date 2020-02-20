const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github;
    }
    
    getRole () {
        return 'Engineer';
    }
    getGithub() {
        return this.github;

    }
}  


module.exports = Engineer;


// besides name, id and email should return:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'