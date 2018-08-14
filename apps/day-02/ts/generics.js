var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
function reverse(items) {
    var toReturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toReturn.push(items[i]);
    }
    return toReturn;
}
;
// const reverseStrings = (items: string[]): string[] => {
//   let toReturn: string[] = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toReturn.push(items[i]);
//   }
//   return toReturn;
// };
var numbers = [1, 2, 3, 4, 5];
var result = reverse(numbers);
console.log('numbers:', numbers);
console.log('result:', result);
var cities = ['Thrissur', 'Kochi', 'Thiruvananthapuram', 'Kozhikode'];
result = reverse(cities);
console.log('cities:', cities);
console.log('result:', result);
var customers = [
    { id: 1, name: 'hari' },
    { id: 2, name: 'krish' },
    { id: 3, name: 'ram' }
];
result = reverse(customers);
console.log('customers:', customers);
console.log('result:', result);
