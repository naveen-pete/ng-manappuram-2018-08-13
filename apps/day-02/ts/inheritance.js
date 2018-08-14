var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // name: string;
    // private name: string;
    function Animal(name) {
        this.name = name;
        // this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
        // this.color = color;
    }
    Dog.prototype.showColor = function () {
        console.log(this.name + " is " + this.color + " in color.");
    };
    Dog.prototype.speak = function () {
        console.log(this.name + ' barks.');
    };
    return Dog;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, color) {
        if (color === void 0) { color = 'ochre'; }
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Lion.prototype.showDetails = function () {
        console.log('name:', this.name);
        console.log('color:', this.color);
    };
    Lion.prototype.speak = function () {
        console.log(this.name + ' roars.');
    };
    return Lion;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        console.log(this.name + ' meow.');
    };
    return Cat;
}(Animal));
// const a = new Animal('snowy');
// a.speak();
var d = new Dog('tomy', 'white');
d.speak();
d.showColor();
var l = new Lion('leo');
l.speak();
l.showDetails();
var k = new Cat('kitty');
k.speak();
