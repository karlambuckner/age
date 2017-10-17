export class GalacticAge {
  constructor(birthdate, age) {
    this.birthdate = birthdate;
    this.age = age;
    this.person = 0;
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
lifeExpectancy(gender, continent){
  let age = 0;

  if (continent === "northAmerica"){
      age = 84;
    }
    else if (continent === "southAmerica"){
      age = 86;
    }
    else if (continent === "Africa"){
      age = 78;
    }
    else if (continent === "Europe"){
      age = 85;
    }
    else if (continent === "Asia"){
      age = 82;
    }
    else if (continent === "Australia"){
      age = 76;
    }
    if(this.age >= 86){
      age = this.age + 3;
    }
    if(gender === "male"){
      age -= 3;
    }
    this.person = age;
    return age;
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
