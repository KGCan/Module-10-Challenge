const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeeName, employeeID, employeeEmail, internSchool) {
        super(employeeName, employeeID, employeeEmail);
        this.internSchool = internSchool;
    }

    getRole () {
        return "Intern";
    }

    getInternSchool () {
        return this.internSchool;
    }

}

module.exports = Intern;