const fibonacci = function(index) {
    if (index == 0) return 0;
    if (index == 1) return 1;
    if (index < 0) return "OOPS";

    a = 0;
    b = 1;

    for (i = 2; i <= index; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
