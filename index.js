class Driver {
  constructor(name, dayJoined) {
    this.name = name;
    this.startDate = new Date(dayJoined);
  }
  
  yearsExperienceFromBeginningOf(year) {
    debugger;
    return year - this.startDate.getFullYear();
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
