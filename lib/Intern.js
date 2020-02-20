const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school;
    }
    
    getRole () {
        return 'Intern';
    }
    getSchool () {
        return this.school
    }
}  


module.exports = Intern;


// besides name, id and email should return:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'