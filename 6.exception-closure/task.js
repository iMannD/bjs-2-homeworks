function parseCount(num) {
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
    get perimeter () {
        return this.a + this.b + this.c;
    }
    get area () {
        let pp = this.Perimeter / 2;
        let a = Number(Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c)));
        return Number(a.toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch(err) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
