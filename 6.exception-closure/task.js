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


class triangle {
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
        let ar = Number(Math.sqrt(hP * (hP - this.a) * (hP - this.b) * (hp - this.c)));
        return ar.toFixed(3);
    }
}

