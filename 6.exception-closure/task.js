function parseCount(cc) {
    if (Number.parseFloat(cc) = NaN) {
        throw new Error("Невалидное значение");
        return;
    }
return parseFloat(cc);
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
        let hP = this.Perimeter ();
        let a = Number(Math.sqrt(hP * (hP - this.a) * (hP - this.b) * (hp - this.c)));
        return a.toFixed(3);
    }
}

function GetTriange (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch(err) {
        let notTriange = {
            get Area() {
                return 'Ошибка! Треугольник не существует';
            }
            get Perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }

    }

}
