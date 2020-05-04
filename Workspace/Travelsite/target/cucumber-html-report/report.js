$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/testFeature/Featurefile.feature");
formatter.feature({
  "line": 1,
  "name": "Login features scenario",
  "description": "",
  "id": "login-features-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Skyscanner login with valid credentials",
  "description": "",
  "id": "login-features-scenario;skyscanner-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter Skyscanner URl",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User logsin using Email \"vinaysingh.ait@gmail.com\" and Password \"ZEppelin2K\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login must be successfull",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});