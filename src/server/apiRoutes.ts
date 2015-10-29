
var {AppRoleCommands} = Auth.AppRoles;

var test:string = "dkdk";
var appUsers = new Auth.AppUsers.AppUserCommands();
var appRoles = new AppRoleCommands();

console.log(appUsers.runTest(test));
console.log(appRoles.runTest(test));