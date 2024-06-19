#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            return; // Create an empty object if w or h is not a positive integer
        }
        this.width = w;
        this.height = h;
    }

    print() {
        if (!this.width || !this.height) {
            return; // If width or height is not set, return
        }
        for (let i = 0; i < this.height; i++) {
            console.log("X".repeat(this.width));
        }
    }

    rotate() {
        if (!this.width || !this.height) {
            return; // If width or height is not set, return
        }
        [this.width, this.height] = [this.height, this.width];
    }

    double() {
        if (!this.width || !this.height) {
            return; // If width or height is not set, return
        }
        this.width *= 2;
        this.height *= 2;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size); // Call the constructor of Rectangle with size as both width and height
    }
}
module.exports = Square;
