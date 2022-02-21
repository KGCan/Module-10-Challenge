const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, engineerGitHub) {
        super(employeeName, employeeID, employeeEmail);
        this.engineerGitHub = engineerGitHub;
    }

    getEmployeeRole () {
        return "Engineer";
    }

    getEngineerGitHub () {
        return this.engineerGitHub;
    }

}

module.exports = Engineer;