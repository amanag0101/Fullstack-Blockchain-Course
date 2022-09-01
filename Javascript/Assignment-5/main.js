// Program to get the volume of a Cylinder, Sphere and Cone with four 
// decimal places using objects and classes.

// Cylinder Class 
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
    }
}

// Sphere Class
class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    getVolume() {
        return ((4/3) * Math.PI * this.radius * this.radius * this.radius).toFixed(4);
    }
}

// Cone Class 
class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return ((Math.PI * this.radius * this.radius * this.height) / 3).toFixed(4);
    }
}


// Main
let cylinder = new Cylinder(2, 4);
console.log(cylinder.getVolume());

let sphere = new Sphere(2);
console.log(sphere.getVolume());

let cone = new Cone(2, 4);
console.log(cone.getVolume());
