function Car(mpg) {
  this.mpg = mpg;
  this.gallons = 0;
  this.odometerReading = 0;
  this.acidTrips = [];
};

Car.prototype.fill = function(gallons) {
  this.gallons += gallons;
}

Car.prototype.drive = function (miles) {
  this.gallons -= (miles/this.mpg);
  this.odometerReading += miles;
  this.acidTrips.push(miles + ' miles');
}

Car.prototype.odometer = function () {
  return this.odometerReading;
}

Car.prototype.trips = function () {
  return this.acidTrips;
}

module.exports = Car;
