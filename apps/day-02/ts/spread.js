var defaultColors = ['red', 'green', 'blue'];
var myColors = ['white', 'black'];
var allColors1 = [defaultColors, myColors];
var allColors2 = ['purple'].concat(defaultColors, ['yellow'], myColors, ['brown']);
console.log('allColors1:', allColors1, ' length:', allColors1.length);
console.log('allColors2:', allColors2, ' length:', allColors2.length);
