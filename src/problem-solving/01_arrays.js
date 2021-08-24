/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */
 function square (array) {
    let res = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        res[i] = array[i] * array[i];
    }
    return res;
}
function sum (array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res;
}
function concat () {
    let res = [];
    for (let i = 0; i < arguments.length; i++){
        res = res.concat(arguments[i]);
    }
    return res;
}
function count (array, obj){
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === obj) res ++;
    }
    return res;
}

module.exports = {
    square,
    sum,
    concat,
    count
}