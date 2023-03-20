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
    constructor (a, b, c)
}