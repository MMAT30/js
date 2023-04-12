

// generic function with contraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
}


// merge must take two objects based on the constraints
const newType = merge({ name: "Max" }, { age: 30 });


// interface for generic function
interface Lengthy {
    length: number;
}

// generic function with contraints
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

// calling generic function
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));


// generic function with contraints and the keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value: " + obj[key];
}


// calling generic function
console.log(extractAndConvert({ name: "Max" }, "name"));




// generic class
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}



// calling generic class with strings
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());


// calling generic class with numbers
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());



// partial generic type
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// function with partial generic type
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    
    // declaring a partial generic type that with not be empty when returned
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}


// readonly generic type
const names: Readonly<string[]> = ["Max", "Anna"];

// these will not work because names is a readonly generic type
// names.push("Manu");
// names.pop();

console.log(names);
