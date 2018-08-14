var Product = /** @class */ (function () {
    function Product(name, price) {
        if (price === void 0) { price = 10000; }
        this.name = name;
        this.price = price;
    }
    Product.prototype.showDetails = function () {
        console.log('  name:', this.name);
        console.log('  price:', this.price);
    };
    return Product;
}());
p1: Product = new Product('Samsung Galaxy', 25000);
// p1.name = 'Samsung Galaxy';
// p1.price = 25000;
p1.showDetails();
var p2 = new Product('Moto X');
// p2.name = 'Moto X';
// p2.price = 30000;
p2.showDetails();
