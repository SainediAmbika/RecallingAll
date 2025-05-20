const nums =[1,2,3,4,5];

//Even nums filtering
const evenNums = nums.map( n => n % 2 === 0);
console.log('Even Nums:' + evenNums);

//Odd nums Filtering
const oddNums = nums.filter(n => n % 2 != 0);
console.log('Odd Nums:'+ oddNums);

//Sum of nums 
const sumNums = nums.reduce((sum,n)=> sum + n, 0);
console.log('Sum Nums:'+ sumNums);

//Avg of Nums
const avgNums = nums.reduce((avg,n) => avg = sumNums/(nums.length));
console.log('Avg Nums:'+ avgNums);


//Filter People Over 18
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Carol', age: 19 }
];

const abveighteen = people.filter(person => person.age >18);
console.log('Above Eighteen: ' + JSON.stringify(abveighteen));


//Total Price
const cart = [
  { item: 'Book', price: 12.99 },
  { item: 'Pen', price: 1.50 },
  { item: 'Notebook', price: 5.00 }
];

const totalPrice = cart.reduce((total,n) => total + n.price, 0);
console.log('Total Price: ' + totalPrice.toFixed(2));