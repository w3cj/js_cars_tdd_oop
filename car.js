function Car(mpg) {
  var self = this;
  this.gallons = 0;
  this.odometerReading = 0;
  this.acidTrips = [];

  this.fill = function(gallons) {
    self.gallons += gallons;
  }

  this.drive = function (miles) {
    self.gallons -= (miles/mpg);
    self.odometerReading += miles;
    self.acidTrips.push(miles + ' miles');
  }

  this.odometer = function () {
    return self.odometerReading;
  }

  this.trips = function () {
    return self.acidTrips;
  }
};

module.exports = Car;
