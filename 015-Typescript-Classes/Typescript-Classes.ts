
// abstract class - can not be instantiated but can be inherited and defined later
abstract class Department {

    // private - can only be accessed by the class
    // protected - can be accessed by the class and the inherited classes
    protected employees: string[] = [];
   

    constructor(private readonly id: string, private name: string) {
        this.id = id;
        this.name = name;
    }
    
    abstract describe(this: Department) : void;

    addEmployee(this: Department, employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation(this: Department) {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


// inheritance for a singleton class
class ITDepartment extends Department {

    // static members can be accessed without creating an object
    static fiscalYear = 2020;
    // static member instance for singleton
    private static instance: ITDepartment;

    // private constructor to prevent creating an object
    private constructor(id: string, private admins: string[], private computers: number) {
        super(id, "IT");
        this.computers = computers;
    }   

    // singleton method
    static getInstance() {

        // if instance already exists, return it
        if (ITDepartment.instance) {
            return this.instance;
        }

        // if instance does not exist, create it
        this.instance = new ITDepartment("d1", ["Ted"], 12);
        return this.instance;
    }

    describe() {
        console.log(`IT Department - computers: ${this.computers}`);
    }

    get getComputers() {
        return this.computers;
    }

    set setComputers(num: number) {
        this.computers = num;
    }

    // static methods can be accessed without creating an object
    static createEmployee(name: string) {
        return {name: name};
    }
}


// calling static method
const employee1 = ITDepartment.createEmployee("Ted");
console.log(employee1);
console.log(ITDepartment.fiscalYear);


// creating inherited object
const it = ITDepartment.getInstance();

// calling inherited object methods
it.describe();
it.addEmployee("Greg");
it.addEmployee("Sam");
it.describe();
it.printEmployeeInformation();

// calling setters and getters
it.setComputers = 15;
console.log(it.getComputers);

