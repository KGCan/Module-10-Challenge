// Require Employee structure
const Employee = require("../lib/Employee");

// Tests via Constructors
test("creates employee object via constructor", () => {
    const employee = new Employee();
    expect(typeof(employee)).toEqual("employeeObject");
});

test("sets employee name via constructor", () => {
    const name = "Casey";
    const employee = new Employee(name);
    expect(employee.employeeName).toEqual(name);
  });
  
test("gets employee ID via constructor", () => {
    const testData = 88;
    const employee = new Employee("Joe", testData);
    expect(employee.employeeID).toEqual(testData);
  });

test("gets employee e-mail via constructor", () => {
    const testData = "Steve@test.com";
    const employee = new Employee("Steve", 95, testData);
    expect(employee.employeeEmail).toEqual(testData);
  });

// Tests via get(name/id/email etc)
  test("get name", () => {
    const testData = "Casey";
    const emplpoyee = new Employee(testData);
    expect(employee.getEmployeeName()).toEqual(testData);
  });
  
  test("get ID", () => {
    const testData = 88;
    const employee = new Employee("Joe", testData);
    expect(employee.getEmployeeId()).toEqual(testData);
  });
  
  test("get E-mail", () => {
    const testData = "Steve@test.com";
    const employee = new Employee("STeve", 95, testData);
    expect(employee.getEmployeeEmail()).toEqual(testData);
  });
  
  test("get role-return employee", () => {
    const testData = "Employee";
    const employee = new Employee("Casey", 88, "Casey@test.com");
    expect(employee.getEmployeeRole()).toEqual(TestData);
  });
