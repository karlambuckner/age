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
//life expectancy across different planets//
lifeExpectancy(gender, continent, exercise, smoker){
  // let expEarth = 0;
  // let expMercury = 0;
  // let expVenus = 0;
  // let expMars = 0;
  // let expJupiter = 0;
  let exp = [5];

  if(gender === "female" && continent === "northAmerica" && exercise === "yes" && smoker === "no"){
    // expEarth = 85;
    // expMercury = 20;
    // expVenus = 53;
    // expMars = 160;
    // expJupiter = 1008;
    exp[0] = 85;
    exp[1] = 20;
    exp[2] = 53;
    exp[3] = 160;
    exp[4] = 1008;
    return exp;
  }
  else if(gender === "female" && continent === "southAmerica" && exercise === "yes" && smoker === "no"){
    expEarth = 83;
    expMercury = 20;
    expVenus = 51;
    expMars = 156;
    expJupiter = 984;
  }
  else if(gender === "female" && continent === "africa" && exercise === "yes" && smoker === "no"){
    expEarth = 82;
    expMercury = 20;
    expVenus = 51;
    expMars = 154;
    expJupiter = 973;
  }
  else if(gender === "female" && continent === "europe" && exercise === "yes" && smoker === "no"){
    expEarth = 87;
    expMercury = 21;
    expVenus = 54;
    expMars = 164;
    expJupiter = 1032;
  }
  else if(gender === "female" && continent === "asia" && exercise === "yes" && smoker === "no"){
    expEarth = 86;
    expMercury = 21;
    expVenus = 53;
    expMars = 162;
    expJupiter = 1020;
  }
  else if(gender === "female" && continent === "australia" && exercise === "yes" && smoker === "no"){
    expEarth = 85;
    expMercury = 20;
    expVenus = 53;
    expMars = 160;
    expJupiter = 1008;
  }
  else if(gender === "male" && continent === "northAmerica" && exercise === "yes" && smoker === "no"){
    expEarth = 82;
    expMercury = 20;
    expVenus = 51;
    expMars = 154;
    expJupiter = 973;
  }
  else if(gender === "male" && continent === "southAmerica" && exercise === "yes" && smoker === "no"){
    expEarth = 80;
    expMercury = 19;
    expVenus = 50;
    expMars = 150;
    expJupiter = 949;
  }
  else if(gender === "male" && continent === "africa" && exercise === "yes" && smoker === "no"){
    expEarth = 79;
    expMercury = 19;
    expVenus = 49;
    expMars = 149;
    expJupiter = 937;
  }
  else if(gender === "male" && continent === "europe" && exercise === "yes" && smoker === "no"){
    expEarth = 84;
    expMercury = 20;
    expVenus = 52;
    expMars = 158;
    expJupiter = 996;
  }
  else if(gender === "male" && continent === "asia" && exercise === "yes" && smoker === "no"){
    expEarth = 83;
    expMercury = 20;
    expVenus = 51;
    expMars = 156;
    expJupiter = 984;
  }
  else if(gender === "male" && continent === "australia" && exercise === "yes" && smoker === "no"){
    expEarth = 82;
    expMercury = 20;
    expVenus = 51;
    expMars = 154;
    expJupiter = 973;
  }
  else{
    expEarth = 72;
    expMercury = 17;
    expVenus = 45;
    expMars = 135;
    expJupiter = 854;
  }
}
//so therefore, years left on each planet
yearsLeftEarth(gender, continent, exercise, smoker) {
  let lifeExp = this.lifeExpectancy(gender, continent, exercise, smoker);
  let age = this.ageInYears();
  let yearsLeft = lifeExp - age;
  return yearsLeft;
}

yearsLeftMercury(gender, continent, exercise, smoker) {
  let lifeExp= this.lifeExpectancy(gender, continent, exercise, smoker);
  let age = this.ageOnMercury();
  let yearsLeft = lifeExp - age;
  return yearsLeft;
}

yearsLeftVenus(gender, continent, exercise, smoker) {
  let lifeExp = this.lifeExpectancy(gender, continent, exercise, smoker);
  let age = this.ageOnVenus();
  let yearsLeft = lifeExp - age;
  return yearsLeft;
}

yearsLeftMars(gender, continent, exercise, smoker) {
  let lifeExp = this.lifeExpectancy(gender, continent, exercise, smoker);
  let age = this.ageOnMars();
  let yearsLeft = lifeExp - age;
  return yearsLeft;
}

yearsLeftJupiter(gender, continent, exercise, smoker) {
  let lifeExp = this.lifeExpectancy(gender, continent, exercise, smoker);
  let age = this.ageOnJupiter();
  let yearsLeft = lifeExp - age;
  return yearsLeft;
}
//if user surpasses life expectancy//
overLifeExpectancy(ageinYears, lifeExpectancy) {
  if (ageInYears > lifeExpectancy) {
    return true;
    }
    else {
      return false;
    }
  }
}
