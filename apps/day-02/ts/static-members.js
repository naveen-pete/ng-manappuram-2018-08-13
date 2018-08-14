// Static methods
var Plane = /** @class */ (function () {
    function Plane(name, numEngines) {
        this.name = name;
        this.numEngines = numEngines;
        this.numEngines = numEngines;
        this.enginesActive = false;
    }
    Plane.prototype.startEngines = function () {
        console.log("starting engines for plane " + this.name);
        this.enginesActive = true;
    };
    Plane.badWeather = function () {
        var planes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            planes[_i] = arguments[_i];
        }
        for (var _a = 0, planes_1 = planes; _a < planes_1.length; _a++) {
            var plane = planes_1[_a];
            console.log("stopping engines for plane " + plane.name + "...");
            plane.enginesActive = false;
        }
    };
    return Plane;
}());
var plane1 = new Plane('boeing', 2);
plane1.startEngines();
var plane2 = new Plane('airbus', 4);
plane2.startEngines();
Plane.badWeather(plane1, plane2);
