const GearRatioCalculator = (() => {
  
  // Formula to approximate vehicle speed for each gear ratio
  // (RPM * Tire Diameter * Final Drive Ratio) / (Axle Ratio * 336)
  
  let dataSet = [];

  let RPM = 8000;
  let tireDiameter = 25.496;
  let finalDriveRatio = 3.62;
  const vehicleMPH = 336;
  let gears = [4.23, 2.53, 1.67, 1.23, 1.00, 0.83];

  gears.map((gearRatio, i) => {
    let oneThousand = (1000 * tireDiameter) / (finalDriveRatio * gearRatio * vehicleMPH);
    let eightThousand = (8000 * tireDiameter) / (finalDriveRatio * gearRatio * vehicleMPH);

    let rpm = {
      'one': oneThousand,
      'eight': eightThousand
    }

    dataSet.push(rpm);
  })
  return dataSet;

})();

export default GearRatioCalculator;