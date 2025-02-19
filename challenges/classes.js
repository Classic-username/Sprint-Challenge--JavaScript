// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuuboidMaker {
    constructor(props){
        this.length = props.length;
        this.width = props.width;
        this.height = props.height; 
    };

    volume(){
        return this.length * this.width * this.height;
    };

    surfaceArea(){
        return 2 * (this.length * this.width + this.height * this.width + this.height * this.length);
    };
}



const cuuboid = new CuuboidMaker({
    length: 4, 
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuuboid.volume()); // 100
console.log(cuuboid.surfaceArea()); // 130

class CubeMaker extends CuuboidMaker {
    constructor(props){
        super(props);
        this.lwh = props.lwh;
    };

    volCube(){
        return Math.pow(this.lwh, 3);
    };
    surfCube(){
        return 6*(Math.pow(this.lwh, 2));
    };
};

let cube = new CubeMaker({
    lwh: 4,
})
console.log(cube.volCube())
console.log(cube.surfCube())
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//I had to change the names in this because when I tried to use the browser to debug it kept saying 'cuboid' already declared. I got the right answers both times.