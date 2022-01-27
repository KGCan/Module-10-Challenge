const Engineer = require("../lib/Engineer");

// Test GitHub using constructor
test("GitHub via constructor", () => {
  const testData = "GitHub";
  const engineer = new Engineer("Tom", 46, "tom@test.com", testData);
  expect(engineer.employeeGitHub).toEqual(testData);
});
//working here
test("getRole equals engineer", () => {
  const testData = "Engineer";
  const engineer = new Engineer("Tom", 46, "tom@test.com", "GitHubUser");
  expect(engineer.getRole()).toEqual(testData);
});

test("username via GitHub", () => {
  const testData = "GitHubUser";
  const engineer = new Engineer("Tom", 46, "tom@test.com", testData);
  expect(engineer.getEmployeeGitHub()).toEqual(testData);
});
