// Arrays
let users = [
    "Shohag Ahmed",
    "Sahaparan",
    "Sajib Ahmed",
    "Jakir Ahmed",
    "Faruk Miah",
    "Nojurul Islam",
    "Shamim Bepari",
    "Meherjabin",
    "Jhon Smith",
];

let shirts = [
    ["red", 34, "$36"],
    ["green", 24, "$63"],
    ["blue", 74, "$256"],
];

let ages = [24, 74, 87, 23, 12, 54, 22, 12, 4, 2, 8, 12, 75, 42];

let numbers = [
    322, 336, 2, 734, 83, 24, 8, 236, 7451, 843, 83, 13, 763, 8742, 74,
];

let countries = [
    "Bangladesh",
    "India",
    "Pakistan",
    "USA",
    "United Kingdom",
    "Russia",
    "Nepal",
];

let result;

// // All methods here
// result = countries.at(4);

// result = countries.concat(numbers, users);

// result = shirts.flat();

// result = countries.copyWithin(2, 5, 7);

// result = countries.entries();

// let go = countries.entries();
// for (let x of go) {
//     result = x;
// }

// result = numbers.every((value) => {
//     return value < 20000;
// });

// users.fill("New value", 2, 3);
// result = users;

// result = ages.filter((age) => {
//     return age > 18;
// });

// result = users.find((user) => user.includes("ja"));
// result = users.findIndex((user) => user.includes("ja"));
// result = users.findLast((user) => user.includes("ja"));
// result = users.findLastIndex((user) => user.includes("ja"));

// users.forEach((user) => (result = user));

// result = Array.from("Hello Shohag Ahmed");

// result = users.includes("Meherjabin");

// result = users.indexOf("Meherjabin");

// result = users.keys();
// for (let x of result) {
//     console.log(x);
// }

// result = users.values();
// for (let x of result) {
//     console.log(x);
// }

// result = Array.isArray(users);

// result = users.join(", ");

// result = users.length;

// result = users.map((value, index) => index + 10 + "-" + value);

// result = Array.of("Hid", "bye", "lee", "fly");
// result = Array.of(23);

// result = ["Shohag Ahmed"];

// result = users.pop();
// result = users.push("Jakaria");
// console.log(users);

// result = users.shift();
// result = users.unshift("Potato Vai");
// console.log(users);

// result = users.valueOf();
// result = users // same as users.valueOf()

// result = users.with(2, "Foysal Ahmed");

// result = users.toString(); // Javascript compiler itself use only

// result = numbers.reduce((total, value) => total + value, 15);
// result = numbers.reduceRight((total, value) => total + value, 15);

// users.reverse();
// result = users.toReversed();

// result = users.slice(3, 5);

// result = users.some((value, index) => value.length > 13);

// numbers.sort((a, b) => b - a);
// result = numbers.toSorted((a, b) => a - b);

// users.splice(3, 0, "Apple man", "Iron man");
// result = users.toSpliced(3, 0, "Apple man", "Iron man");

// Console log the result
console.log(users);
