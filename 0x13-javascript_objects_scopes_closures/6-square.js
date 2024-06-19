#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            return; // Create an empty object if w or h is not a positive integer
        }
        this.width = w;
        this.height = h;
    }

    print(c) {
        if (!c) {
            c = 'X';
        }
        if (!this.width || !this.height) {
            return; // If width or height is not set, return
        }
        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size); // Call the constructor of Rectangle with size as both width and height
    }

    charPrint(c) {
        super.print(c);
    }
}
module.exports = Square;
