class Employee {

    constructor(employeeName, employeeID, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
    }

    getEmployeeName () {
        return this.employeeName;
    }

    getEmployeeID () {
        return this.employeeID;
    }

    getEmployeeEmail () {
        return this.employeeEmail;
    }

    getEmployeeRole () {
        return "Employee";
    }

}

module.exports = Employee;