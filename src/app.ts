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
        return `(${this.x}, ${this.y}, ${this.z})`
    }    
}

let v3d: Vertex3d = new Vertex3d(10, 10, 10);

console.log(v3d);