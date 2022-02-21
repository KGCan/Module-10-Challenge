const Intern = require("../lib/Intern");

test("set school via constructor", () => {
    const testData = "CSUS";
    const intern = new Intern("Chris", 22, "chris@test.com", testData);
    expect(intern.internSchool()).toEqual(testData);
});

test("getEmployeeRole returns intern", () => {
    const testData = "Intern";
    const intern = new Intern("Chris", 22, "chris@test.com", "CSUS");
    expect(intern.getEmplpoyeeRole()).toEqual(testData);
});

test("get school from getInternSchool", () => {
    const testData = "CSUS";
    const intern = new Intern("Chris", 22, "chris@test.com", testData);
    expect(intern.getInternSchool()).toEqual(testData);
});