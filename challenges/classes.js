// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* 
Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area.
*/

class CubeMaker extends CuboidMaker2 {
  constructor(attributes) {
    super(attributes);
  }
  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeArea() {
    return Math.pow(this.length, 2) * 6;
  }
}

//alternatively this could be done with callbacks instead of creating a new object ^^

const cube = new CubeMaker({
  lenght: 10,
  length: 10,
  height: 10
});

console.log(cube.cubeVolume());
console.log(cube.cubeArea());
