"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Id: " + this.id);
        console.log("Name: " + this.name);
    };
    Employee.prototype.getId = function () {
        return this.id;
    };
    return Employee;
}());
exports.Employee = Employee;
