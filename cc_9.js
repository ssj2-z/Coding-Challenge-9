// Task 1 Creating Employee Classifications 
class Employee{
    constructor(name, id, department, salary){
        this.name = name; this.id = id; this.department = department; this.salary = salary;
    }
}

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, department: ${this.department}, Salary: $${this.salary}`;
}

    calculateAnnualSalary() {
        return this.salary * 12;
}

// Example usage
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary());
// Expected output: 6000

// Task 2Creating Manager Classification 
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; this.id = id; this.department = department; this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return thiscalculateAnnualSalary() * .10;
    }
}

// Example usage
const mgr1 = new Manager("John Wright", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Wright, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus());
// Expected output: 9600

// Task 3 Creating Company Classification
class Company {
    constructor(name) { this.name = name; this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => (
            console.log(employee.getDetails());
        ));
    }
}

// Example usage
const employee1 = new Employee("John Cena", 101, "Sales", 5000);
const manager1 = new Manager("John Wright", 201, "IT", 8000, 5);
const company = new Company("TechCorp");

const comapny = new Company("TechCorp"); company.addEmployee(employee1);
company.addEmployee(manager1); company.listEmployees();
// Expected output:
// "Employee: John Cena, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Wright, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// Task 4 Implementing Payroll System
class Company {
    constructor(name) {
        this.name = name; this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }

    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary (), 0);
    }
}

// Example usage
const employe1 = new Employee("John Cena", 101, "Sales", 5000);
const manager1 = new Manager("John Wright", 201, "IT", 8000, 5);

const company = new Company("TechCorp");
company.addEmployee(employee1); company.addEmployee(manager1); company.listEmployees();
// Expected output:
// "Emploee: John Cena, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Wright, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(company.calculatedTotalPayroll());
// Expected ouput: 172800