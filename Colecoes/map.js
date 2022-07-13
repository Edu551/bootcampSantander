const myMap = new Map();

myMap.set("Jose", "Admin");
myMap.set("Lara", "Admin");
myMap.set("Julia", "User");
myMap.set("João", "User");

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(myMap));
