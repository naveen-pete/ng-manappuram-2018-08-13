var drawRectangle = function (rectOptions) {
    // logic to draw the rectangle
    console.log('length:', rectOptions.length);
    console.log('width:', rectOptions.width);
};
var o = {
    length: 5,
    width: 10
};
drawRectangle(o);
o = {
    length: 3,
    width: 6
};
drawRectangle(o);
var c = {
    name: 'hari',
    age: 25,
    length: 10,
    width: 20
};
drawRectangle(c);
