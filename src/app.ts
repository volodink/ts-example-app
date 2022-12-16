interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    private width!: number;
    private height!: number;
    constructor (w:number, h:number) {
        this.width = w;
        this.height = h;
    }
    public area(): number {
        return this.width * this.height;
    }
}

class Triangle implements Shape {
    private height!: number;
    private base!: number;
    constructor (b:number, h:number) {
        this.base = b;
        this.height = h;
    }
    public area(): number {
        return (1/2) * this.base * this.height;
    }
}

class Circle implements Shape {
    private diameter!: number;
    constructor (d: number) {
        this.diameter = d;
    }
    public area(): number {
        return Math.PI * this.diameter;
    }
}

class Application {
    public run() {
        let rect: Rectangle = new Rectangle(10, 10);
        console.log(rect.area());
        let trig: Triangle = new Triangle(10, 10);
        console.log(trig.area());
        let circle: Circle = new Circle(10);
        console.log(circle.area());
    }
}

const app: Application = new Application();
app.run();
