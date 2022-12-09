// class Vertex2d {
//     private _x: number;
//     private _y: number;

//     constructor(
//         public x: number,
//         public y: number,
//     ) {
//         this._x = x;      
//         this._y = y;      
//     }

//     public get x(): number {
//         return this._x;
//     }

//     public set x(n: number) {
//         this._x = n;
//     }

//     public get y(): number {
//         return this._y;
//     }

//     public set y(n: number) {
//         this._y = n;
//     }
// }

// class Vertex3d extends Vertex2d {
//     private _z: number;

//     public get z(): number {
//         return this._z;
//     }

//     public set z(n: number) {
//         this._z = n;
//     }

//     constructor(
//         public x: number,
//         public y: number,
//         public z: number
//     ) {
//         super(x, y);
//         this._z = z;      
//     }

//     public toString = () : string => {
//         return `(${this.x}, ${this.y}, ${this.z})`
//     }    
// }

// let v3d: Vertex3d = new Vertex3d(10, 10, 10);

// console.log(v3d);

abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');

console.log(emp);
console.log(emp2);


/// Let's write Shape problem :)
