class Driver {
  constructor(name, dayJoined) {
    this.name = name;
    this.dayJoined = dayJoined;
  }
  
  startDate() {
    const date = new Date(this.dayJoined);
    return date;
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
