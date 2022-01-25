const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, engineerGitHub) {
        super(employeeName, employeeID, employeeEmail);
        this.engineerGitHub = engineerGitHub;
    }

    getRole () {
        return "Engineer";
    }

    getEngineerGitHub () {
        return this.engineerGitHub;
    }

}

module.exports = Engineer;