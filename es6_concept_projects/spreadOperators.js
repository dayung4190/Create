// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const user = { name: "Favour", age: 21 };
const updatedUser = { ...user, role: "student" };

console.log(combined);
console.log(updatedUser);
