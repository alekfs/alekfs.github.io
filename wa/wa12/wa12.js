// Problem 1

let text = '{"employees" :  [' +
'{ "name":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligible":"true"}, ' +
'{ "name":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500" , "raiseEligible":"true"}, ' +
'{ "name":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligible":"false"} ]}';

const obj = JSON.parse(text);
console.log("Problem 1");
console.log(text);
console.log(obj);
console.log(obj["employees"][1]["name"]);


// Problem 2

let company = '{"company" : [' +
'{"companyName":Tech Stars , "website":"www.techstars.site" , "employees":employees} ]}';

console.log("Problem 2");
console.log(company);
console.log(obj);

// Problem 3
//3 add new key value pair in JSON object already declared
let employeeLen = obj["employees"].length;
obj["employees"][employeeLen + 1] = '{ "name":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600" , "raiseEligible":"false" }';

console.log("Problem 3");
console.log(text);

//Problem 4

