//moment isn't working//
var moment = require('moment');

export class GalacticAge {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }
//would find difference between the moment and the DOB if moment was working//
  ageInYears() {
   let dob = this.birthdate;
   let earthYears = moment().diff(dob, 'years', false);
   return earthYears;
 }
//converts age in years to seconds//
  ageInSeconds() {
      let earthSeconds = this.ageInYears() * 31536000;
      return earthSeconds;
    }
//converts age in Earth years to other planets//
  ageOnMercury() {
    let mercuryAge = Math.round(this.ageInYears() * 0.24);
    return mercuryAge;
  }

  ageOnVenus() {
    let venusAge = Math.round(this.ageInYears() * 0.62);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = Math.round(this.ageInYears() * 1.88);
    return marsAge;
  }

  ageOnJupiter() {
    let jupiterAge = Math.round(this.ageInYears() * 11.86);
    return jupiterAge;
  }
  }
