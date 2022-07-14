const myArray = [1, 2, 3, 4, 5];

const maca = {
    value: 2,
};

const banana = {
    value: 4,
};

function mapThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

console.log("Usando Maçã ", mapThis(myArray, maca));
console.log("Usando Banana ", mapThis(myArray, banana));
console.log(
    "Sem o this ",
    myArray.map((item) => item * 10)
);

console.log(
    "Números ímpares ",
    myArray.filter((i) => i % 2 !== 0)
);
console.log(
    "Números pares ",
    myArray.filter((i) => i % 2 === 0)
);
