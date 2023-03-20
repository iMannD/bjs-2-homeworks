function parseCount(cc) {
    if (Number.parseFloat(cc) = NaN) {
        throw new Error('Невалидное значение');
        return;
    }
    return Number.parseFloat(cc);
}

function validateCount(nn) {
    try {
        return parseCount(nn)
    } catch (err) {
        return err;
    }
    return parseCount(nn);
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
