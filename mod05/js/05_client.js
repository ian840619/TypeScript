"use strict";
/// <reference path="03_namespace.ts" />
/// <reference path="04_var.ts" />
let emp = new HR.Employee(1, "aaa");
console.log(emp.getInfo());
var MyEmployee = HR.Employee;
let emp2 = new MyEmployee(2, "bbb");
console.log(emp2.getInfo());
console.log(HR.projectName);
//tsc --target es6 -outfile  client.js 05_client.ts
//tsc -outfile client.js 05_client.ts
