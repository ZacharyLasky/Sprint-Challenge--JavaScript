// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(obj) {
//     this.length = obj.length;
//     this.width = obj.width;
//     this.height = obj.height;
//   }
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   }
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }
  
//   const cuboid = new CuboidMaker ({
//     length: 4,
//     width: 5,
//     height: 5
//   });

class CuboidCreator {
  constructor(parentAttrs) {
    this.length = parentAttrs.length;
    this.width = parentAttrs.width;
    this.height = parentAttrs.height;
  }
  volume = function() {
    return this.length * this.width * this.height;
  }
  surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid1 = new CuboidCreator ({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.