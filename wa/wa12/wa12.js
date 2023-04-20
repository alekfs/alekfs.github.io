// Problem 1

let text = '{"employees" :  [' +
'{ "name":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligible":"true"}, ' +
'{ "name":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500" , "raiseEligible":"true"}, ' +
'{ "name":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligible":"false"} ]}';

const obj = JSON.parse(text);
console.log("Problem 1");
console.log(text);
console.log(obj);
console.log(obj["employees"][0]["name"]);


// Problem 2

let company = {
    "companyName": "Tech Stars", "website": "www.techstars.site", "employees": [
    { "firstName": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raiseEligible": true},
    { "firstName": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raiseEligible": true},
    { "firstName": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raiseEligible": false}]
}

console.log("Problem 2");
console.log(company);
console.log(obj);

// Problem 3
//3 add new key value pair in JSON object already declared
let employeeLen = obj["employees"].length;
obj["employees"][employeeLen + 1] = '{ "name":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600" , "raiseEligible":"false" }';

console.log("Problem 3");
console.log(employeeLen);
console.log(obj);
console.log(obj["employees"][2]["name"]);

// Problem 4
function calculateTotalSalary(company) {
    let totalSalary = 0;
    const employees = company.employees;
    for (let i = 0; i < employees.length; i++) {
      totalSalary += employees[i].salary;
    }
    return totalSalary;
}

console.log("Problem 4");
console.log(calculateTotalSalary(company));

// Problem 5
function updateSalary(company) {
    const employees = company.employees;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].raiseEligible) {
        employees[i].salary *= 1.1;
        employees[i].raiseEligible = false;
      }
    }
}

console.log("Problem 5");
console.log(updateSalary(company));

// Problem 6
const workingFromHome = ['Anna', 'Sam'];


company.employees.forEach(employee => {
  employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log("Problem 6");
console.log(company);
