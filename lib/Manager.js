const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
        this.officeNumber = officeNumber;
    }

    getRole () {
        return "Manager";
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
}

module.exports = Manager;