// Build team
const buildTeam = team => {

    // Build Manager HTML
    const buildManager = manager => {
        return `
        <div class="card team-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getEmployeeName()}</h2>
            <h3 class="card-title"><i class="fas fa-black-tie mr-2"></i>${manager.getEmployeeRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getEmployeeID()}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${manager.getEmployeeEmail()}">${manager.getEmployeeEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    
    // Build Engineer HTML
    const buildEngineer = engineer => {
        return `
        <div class="card team-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getEmployeeName()}</h2>
        <h3 class="card-title"><i class="fas fa-brain mr-2"></i>${engineer.getEmployeeRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getEmployeeID()}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${engineer.getEmployeeEmail()}">${engineer.getEmployeeEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getEngineerGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getEngineerGitHub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // Build Intern HTML
    const buildIntern = intern => {
        return `
        <div class="card team-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getEmployeeName()}</h2>
        <h3 class="card-title"><i class="fas fa-book mr-2"></i>${intern.getEmployeeRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getEmployeeID()}</li>
            <li class="list-group-item">E-mail: <a href="mailto:${intern.getEmployeeEmail()}">${intern.getEmployeeEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getInternSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getEmployeeRole() === "Manager")
        .map(manager => buildManager(manager))
    );
    html.push(team
        .filter(employee => employee.getEmployeeRole() === "Engineer")
        .map(engineer => buildEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getEmployeeRole() === "Intern")
        .map(intern => buildIntern(intern))
        .join("")
    );

    return html.join("");

}

// Export function to build main page-structure
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Awesome!</title>

    <!-- Link for bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Link for CSS -->
    <link rel="stylesheet" href="./style.css">

    <!-- Link to fontawesome -->
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-header">
                <h1 class="text-center">Meet the Team!</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-space col-12 d-flex justify-content-center">
                ${buildTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};