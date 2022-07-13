const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1, 1];

const mySet = new Set(myArray);

console.log(mySet);

(() => {
    if (mySet.has(8)) mySet.add(9);
})();

// console.log(mySet.has(8));

console.log(mySet);

function valoresUnicos(arr) {
    return [...mySet];
}

console.log(valoresUnicos(myArray));
