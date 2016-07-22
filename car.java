public class Car {
  private int mpg;
  private int gallons;
  private int odometerReading;
  private ArrayList<string> acidTrips;

  Car(mpg) {
    this.mpg = mpg;
    gallons = 0;
    odometerReading = 0;
    acidTrips = new ArrayList<string>();
  }

  public void fill(gallons) {
    this.gallons += gallons;
  }

  public void drive(miles) {
    gallons -= (miles/mpg);
    odometerReading += miles;
    acidTrips.add(miles + " miles");
  }

  public int odometer() {
    return odometerReading;
  }

  public ArrayList<string> trips() {
    return acidTrips;
  }
}
