let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, dayJoined) {
    this.name = name;
    this.startDate = new Date(dayJoined);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    const longitude = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    console.log(longitude);
    
    const latitude = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    console.log(latitude);
    
    return longitude + latitude;
  }
  estimatedTime() {
    
  }
}
