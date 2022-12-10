class Vertex2d {
    private _x: number;
    private _y: number;

    constructor(
        public x: number,
        public y: number,
    ) {
        this._x = x;      
        this._y = y;      
    }

    public get x(): number {
        return this._x;
    }

    public set x(n: number) {
        this._x = n;
    }

    public get y(): number {
        return this._y;
    }

    public set y(n: number) {
        this._y = n;
    }
}

class Vertex3d extends Vertex2d {
    private _z: number;

    public get z(): number {
        return this._z;
    }

    public set z(n: number) {
        this._z = n;
    }

    constructor(
        public x: number,
        public y: number,
        public z: number
    ) {
        super(x, y);
        this._z = z;      
    }

    public toString = () : string => {
        return `(${this._x}, ${this._y}, ${this._z})`
    }    
}

let v3d: Vertex3d = new Vertex3d(10, 10, 10);

console.log(v3d.toString());

// abstract class Person {
//     name: string;
    
//     constructor(name: string) {
//         this.name = name;
//     }

//     display(): void{
//         console.log(this.name);
//     }

//     abstract find(name:string): Person;
// }

// class Employee extends Person { 
//     empCode: number;
    
//     constructor(name: string, code: number) { 
//         super(name); // must call super()
//         this.empCode = code;
//     }

//     find(name:string): Person { 
//         // execute AJAX request to find an employee from a db
//         return new Employee(name, 1);
//     }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James

// let emp2: Person = emp.find('Steve');

// console.log(emp);
// console.log(emp2);


/// Let's write Shape problem :)

// abstract class Shape {
//     private width: number;
//     private height: number;
//     constructor (w: number, h:number) {
//         this.width = w;
//         this.height = h;
//     }
//     public move() {
//         console.log('Move!');
//     }   
//     abstract draw(): void;
// }
// class Circle extends Shape {
//     public draw():void {
//         console.log('Draw circle!!!!');
//     }
// }
// class Rectangle extends Shape {
//     public draw():void {
//         console.log('Draw rect!!!!');
//     }
//     public move() {
//         console.log('Rectanle move!');
//     }
// }
// let circle: Circle = new Circle(10, 20);
// let rect: Rectangle = new Rectangle(10, 20);
// console.log(circle);
// console.log(rect);
// rect.draw();
// circle.draw();
// rect.move();
// circle.move();

class Post {

}

abstract class Button {
    abstract press():void;
}

class TextButton {
    public press():void {}
}

class LikeButton {
    public press():void {}
}

class Feed {
    private feed:Array<Post>;
}

class Application {
    public run():void {}
}

let app: Application = new Application();
app.run();
