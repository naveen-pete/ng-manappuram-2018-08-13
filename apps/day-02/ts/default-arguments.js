var getFullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'kumar'; }
    return "Full name is " + lastName + ", " + firstName;
};
var fn = getFullName('ram', 'singh');
console.log('full name:', fn);
fn = getFullName('krish');
console.log('full name:', fn);
var getTotalAmount = function (amount, interest) {
    if (interest === void 0) { interest = 8; }
    var totalAmount = amount + (amount * interest / 100);
    return totalAmount;
};
console.log('total amount (100, 10):', getTotalAmount(100, 10));
console.log('total amount (200):', getTotalAmount(200));
// console.log('total amount (200, 10, 20):', getTotalAmount(200, 10, 20));
