const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test ("Set office number via argument", () => {
    const testData = 847
    const manager = new Manager("Casey", 88, "Casey@test.com", testData);
    expect(manager.officeNumber()).toEqual(testData);
});

test("getEmployeeRole () returns Manager", () => {
    const testData = "Manager";
    const manager = new Manager("Casey", 88, "Casey@test.com", 847);
    expect(manager.getEmployeeRole()).toEqual(testData);
});

test("office number via getOfficeNumber", () => {
    const testData = 847; 
    const manager = new Manager("Casey", 88, "Casey@test.com", testData);
    expect(manager.getOfficeNumber()).toEqual(testData);
});