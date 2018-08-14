var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// Array destructuring
var companies = ['manappuram', 'tcs', 'wipro', 'bajaj'];
// const c1 = companies[0];
// const c2 = companies[1];
var c1 = companies[0], c2 = companies[1], otherCompanies = companies.slice(2);
console.log('c1:', c1);
console.log('c2:', c2);
console.log('otherCompanies:', otherCompanies);
var product = {
    id: 1,
    name1: 'Samsung Galaxy',
    price: 25000,
    isAvailable: true
};
// const name1 = product.name1;
// const price = product.price;
var name1 = product.name1, price = product.price;
console.log('name1:', name1);
console.log('price:', price);
// const product2 = {
//   id: product.id,
//   name1: product.name1,
//   price: product.price,
//   isAvailable: product.isAvailable
// }
var product2 = __assign({}, product);
console.log('product:', product);
console.log('product2:', product2);
