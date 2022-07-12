function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

// console.log(findMax(1, 2, 3, 5, 10, 8, 20));

const pessoa = {
    firstName: "Andre",
    lastName: "Soares",
    id: 1,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    getId: function () {
        return this.id;
    },
};

console.log(pessoa.fullName());
