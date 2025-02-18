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
