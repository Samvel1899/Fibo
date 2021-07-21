// ------ Fibonacci recursive -------
function fib(n) {
    if (n < 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
    fib();
}
console.log('fib(7)' + ' = ' + fib(7));
// ---------------------------------


// ----- Fibonacci loop --------
function fibLoop(n) {
    let f1 = 0;
    let f2 = 1;
    let count = 1;

    for (let i = 1; i <= n; ++i) {
        count = f1 + f2;
        f1 = f2;
        f2 = count;
    }
    return count;
}
console.log('fibLoop(50)' + ' = ' + fibLoop(50));
// ----------------------------


// ----- fibonacci cache -------
let cache = [];

function fibCache(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    if (cache[n]) {
        return cache[n];
    }
    else {
        cache[n] = (fibCache(n - 1) + fibCache(n - 2));
    }

    return cache[n];
}

console.log('fibCache(6)' + ' = ' + fibCache(6));
// --------------------------------
