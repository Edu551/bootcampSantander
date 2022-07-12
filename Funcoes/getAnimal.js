function getAnimal(id) {
    switch (id) {
        case "dog":
            return "cão";
        case "gato":
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

console.log(getAnimal("dog"));
console.log(getAnimal("gato"));
console.log(getAnimal(3));
console.log(getAnimal(1));
