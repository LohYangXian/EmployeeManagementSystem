import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = environment.apiBaseUrl;
    }
    getEmployees() {
        return this.http.get(`${this.apiServerUrl}/employee/all`);
    }
    addEmployee(employee) {
        return this.http.post(`${this.apiServerUrl}/employee/add`, employee);
    }
    updateEmployee(employee) {
        return this.http.put(`${this.apiServerUrl}/employee/update`, employee);
    }
    deleteEmployee(employeeId) {
        return this.http.delete(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
};
EmployeeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map