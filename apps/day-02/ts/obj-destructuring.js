var products = [
    {
        id: 1,
        name1: 'Samsung Galaxy',
        price: 25000,
        isAvailable: true
    },
    {
        id: 2,
        name1: 'Moto X',
        price: 30000,
        isAvailable: true
    }
];
for (var i = 0; i < products.length; i++) {
    var _a = products[i], id = _a.id, name1 = _a.name1, price = _a.price;
    console.log('product id:', id);
    console.log('  name1:', name1);
    console.log('  price:', price);
}
