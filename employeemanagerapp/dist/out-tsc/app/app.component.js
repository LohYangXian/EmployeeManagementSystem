import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    //Calls the getEmployees function when the component is initialised
    ngOnInit() {
        this.getEmployees();
    }
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    onAddEmployee(addForm) {
        document.getElementById("add-employee-form").click();
        this.employeeService.addEmployee(addForm.value).subscribe((response) => {
            console.log(response);
            this.getEmployees();
            addForm.reset();
        }, (error) => {
            alert(error.message);
        });
    }
    onUpdateEmployee(employee) {
        this.employeeService.updateEmployee(employee).subscribe((response) => {
            console.log(response);
            this.getEmployees();
        }, (error) => {
            alert(error.message);
        });
    }
    onDeleteEmployee(employeeId) {
        this.employeeService.deleteEmployee(employeeId).subscribe((response) => {
            console.log(response);
            this.getEmployees();
        }, (error) => {
            alert(error.message);
        });
    }
    getEmployees() {
        this.employeeService.getEmployees().subscribe((response) => {
            this.employees = response;
        }, (error) => {
            alert(error.message);
        });
    }
    searchEmployees(key) {
        console.log(key);
        const results = [];
        for (const employee of this.employees) {
            if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                results.push(employee);
            }
        }
        this.employees = results;
        if (results.length == 0 || !key) {
            this.getEmployees();
        }
    }
    onOpenModal(employee, mode) {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
            button.setAttribute('data-target', '#addEmployeeModal');
        }
        if (mode === 'edit') {
            this.editEmployee = employee;
            button.setAttribute('data-target', '#updateEmployeeModal');
        }
        if (mode === 'delete') {
            this.deleteEmployee = employee;
            button.setAttribute('data-target', '#deleteEmployeeModal');
        }
        container.appendChild(button);
        button.click();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map