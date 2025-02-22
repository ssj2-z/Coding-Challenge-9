// Task 1 Creating Employee Classifications 
class Employee{ //Creating class Employee
    constructor(name, id, department, salary) { //Costructor setting up specific properties
        this.name = name; this.id = id; this.department = department; this.salary = salary;
    };

    getDetails() { //Setting up getDetails method
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    };

    calculateAnnualSalary() {//Setting up getDetails method
        return this.salary * 12; //REturning employee's salary times twelve months
    };
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //Creating a new employee assigned to emp1

console.log(emp1.getDetails()); //Logging
console.log(emp1.calculateAnnualSalary()); //Logging

// Task 2 Creating Manager Classification 
class Manager extends Employee{ //Creating class Manager extending from Employee
    constructor(name, id, department, salary, teamSize) { //Constructor setting up specific properties
       super(name, id, department, salary); // Process from Employee using super
        this.teamSize = teamSize; // Adding teamSize
    };

    getDetails() { //Setting up new getDetails method including teamSize
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; //Returning employee details, including teamSize
    };

    calculateAnnualSalary() { //Task 4 - Modifying calculateAnnualSalary() to consider bonuses for managers.
        return super.calculateAnnualSalary() + this.calculateBonus(); //Returning employee's annual salary + calculateBonus()
    };

    calculateBonus() { //Setting up calculateBonus method
        return super.calculateAnnualSalary() * .10; //Calculating bonus as ten percentof annual salary
    };
}

const mgr1 = new Manager("John Wright", 201, "IT", 8000, 5); //Creating a new manager assigned to mgr1
console.log(mgr1.getDetails()); //Logging
console.log(mgr1.calculateBonus()); //Logging

// Task 3 Creating Company Classification
class Company { //Creating class company
    constructor(name, employees) { //Constructor setting up specific properties
    this.name = name; this.employees = []; //Initializing empty employees array
    };

    addEmployee(employee) { //Setting up addEmployees method
        this.employees.push(employee); //.push() employee to the employees array
    }

    listEmployees() { //Setting up listEmployees method
        this.employees.forEach(employee => {console.log(employee.getDetails())}); //console.log the getDetails method forEach employees in employees array
    }

    calculateTotalPayroll() { //Task 4 - Add a method calculateTotalPayroll() to the Company class
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); //Task 4 - returns the sum of all employee salaries (including managers)
    }
    
    promoteToManager (employee, teamSize) { //Task 5 - Add a method promoteToManager(employee, teamSize) in the Company class
        const index = this.employees.indexOf(employee); //Finding employee position in employees array as index
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); //Creating a Manager with the properties of employee saved at index
    }
}

const company = new Company("TechCorp"); //Test case
company.addEmployee(emp1); //Adding emp1 using addEmployee method
company.addEmployee(mgr1); //Adding mgr1 using addEmployee method
company.listEmployees(); //Logging

// Task 4 Implementing Payroll System
console.log(company.calculateTotalPayroll()); //Logging

// Task 5 Promotions
company.promoteToManager(emp1, 3); //Test case
company.listEmployees(); //Logging