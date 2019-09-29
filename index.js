class Driver {
  constructor(name, dayJoined) {
    this.name = name;
    this.dayJoined = dayJoined;
  }
  
  startDate() {
    return Date.parse(this.dayJoined);
  }
  
  yearsExperienceFromBeginningOf() {
    
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    
  }
  estimatedTime() {
    
  }
}
