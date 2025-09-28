// Destructuring
const user = { id: 1, username: "favour", role: "student" };
const { username, role } = user;

const numbers = [10, 20, 30];
const [first, , third] = numbers;

console.log(username, role); // favour student
console.log(first, third); // 10 30
