﻿function parseCount(num) {
    let temp = Number.parseFloat(num)
    if (isNaN(temp)) {
        throw new Error('Невалидное значение');
    }
    return temp;
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (err) {
        return err;
    }
    return parseCount(num);
}


class Triangle {
    constructor (a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get Perimeter () {
        return this.a + this.b + this.c;
    }
    get Area () {
        let pp = this.Perimeter / 2;
        let a = Number(Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c)));
        return a.toFixed(3);
    }
}

function GetTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch(err) {
        let errTriangle = {
            get Area() {
                return 'Ошибка! Треугольник не существует';
            }
            get Perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
        return errTriangle;
    }
}
