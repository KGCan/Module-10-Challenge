const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber) {
        super(employeeName, employeeID, employeeEmail);
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