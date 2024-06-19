#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            return {}; //return an empty object if width or height is invalid
        }
        this.width = w;
        this.height = h;
    }
}

module.exports = Rectangle;

