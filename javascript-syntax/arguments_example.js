function funa (a, b, c) {
    console.log(a, b, c);
    arguments[1] = 'dd';
    console.log(a, b, c)
}

funa(3, 4, 5);
