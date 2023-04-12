import { Something } from "./Typescript-Modules1";
import { Somewhere} from "./Typescript-Modules1";


class SomethingObject implements Something {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


class SomewhereObject implements Somewhere {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const something = new SomethingObject("something");
const somewhere = new SomewhereObject("somewhere");
console.log(something.name);
console.log(somewhere.name);
