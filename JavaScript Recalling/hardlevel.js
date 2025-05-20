// Names of People Under 30 (filter + map)
const people = [
  { name: 'Tom', age: 35 },
  { name: 'Jerry', age: 22 },
  { name: 'Anna', age: 19 }
];

const underThrityNames = people.filter(person => person.age < 30).map(person => person.name);
console.log(underThrityNames);

//Count Even Numbers (filter + length OR reduce)
const numbers = [1, 2, 3, 4, 6, 9];
const totalEvenNums = numbers.filter(n => n % 2 === 0).length;
console.log(totalEvenNums);


//Multiply All Numbers (reduce)
const nums = [1, 2, 3, 4];
const multipliedNums = nums.reduce((item, n)=> item * n, 1)
console.log(multipliedNums);
