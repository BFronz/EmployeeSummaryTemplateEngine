const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getRole () {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}  


module.exports = Manager;


// besides name, id and email should return:
// officeNumber
// getRole() // Overridden to return 'Manager'