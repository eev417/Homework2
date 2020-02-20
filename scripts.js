var employees=[];

 function init() {
   'use strict';
   document.getElementById('out-browserinfo').innerHTML = navigator.userAgent;
   document.getElementById('button-submit').onclick = send;
}
function getData() {
  'use strict';
   let employeeId = Math.floor((Math.random() * 99999999) + 10000000);
   let employee = {employeeId: employeeId};
   let firstN = document.getElementById('firstname').value;
   let lastN = document.getElementById('lastname').value;
   let department = document.getElementById('dept').value;
   let keepgoing = true;
  
  while(keepgoing) {
    if(employees.length === 0) {
      employees[employees.length] = {firstName: firstN, lastName: lastN, dept: department, Id: employeeId};
      keepgoing = false;
    }
    else if(employees.indexOf(employeeId) == -1) {
    employees.push({firstName: firstN, lastName: lastN, dept: department, Id: employeeId});
    keepgoing = false;
    }
    else {
      employeeId = Math.floor((Math.random() * 99999999) + 10000000);
      keepgoing = true;
    }
  }
}
var month_name = function(dt){
  'use strict';
var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];
};
 function send() {
   'use strict';
   var date = new Date();
   var month = month_name(date);
   getData();
  document.getElementById('out-header').innerHTML = "<h1>Employee added</>";
  document.getElementById('out-name').innerHTML = "Name: " + employees[employees.length-1].firstName + ", " + employees[employees.length-1].lastName;
  document.getElementById('out-department').innerHTML = "Department: " + employees[employees.length-1].dept;
  document.getElementById('out-employeeid').innerHTML = "Employee ID: " + employees[employees.length-1].Id;
  document.getElementById('out-hiredate').innerHTML = "Hire Date: " + month + " " + date.getDate() + " " + date.getFullYear();
  document.getElementById('out-totalemployees').innerHTML = "Total Employees: " + employees.length;
}
//document.addEventListener('DOMContentLoaded', init);
 window.onload = init;