function parseCount(c) {
    if (Number.parseFloat(c) = NaN) {
        throw new Error("Невалидное значение");
        return;
    }
return parseFloat(c);
}

function validateCount(n) {
    try {
        return parseCount(n)
    } catch (err) {
        return err;
    }
    return parseCount(n);
}