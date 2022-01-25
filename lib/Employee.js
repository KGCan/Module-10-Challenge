class Employee {

    constructor(employeeName, employeeID, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
    }

    getEmployeeName () {
        return this.employeeName;
    }

    getemployeeID () {
        return this.employeeID;
    }

    getemployeeEmail () {
        return this.employeeEmail;
    }

    getRole () {
        return "Employee";
    }

}

module.exports = Employee;