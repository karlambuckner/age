//specs aren't testing because of failed to parse JSON error//
//these specs are what I would assume may pass//
//if moment was also working//

import { GalacticAge } from './../js/galacticAge.js';

describe('GalacticAge', function () {
  let myAge;
  let surpassExp;

  beforeEach(function() {
    myAge = new GalacticAge(27,"04/05/1990");
    surpassExp = new GalacticAge(85,"07/07/1932");
  });

  it('takes DOB input from user', function(){
    expect(myAge.birthdate)).toEqual('04/05/1990')
  });

  it('determines age by the difference between current time and entered DOB', function() {
    expect(myAge.ageInYears()).toEqual(27);
  });

  it('takes user input of age in years on Earth and converts to seconds', function() {
    expect(myAge.ageInSeconds()).toEqual(851472000);
  });

  it('converts years on Earth to years on Mercury', function() {
    expect(myAge.ageOnMercury()).toEqual(6);
  });

  it('converts years on Earth to years on Venus', function() {
    expect(myAge.ageOnVenus()).toEqual(17);
  });

  it('converts years on Earth to years on Mars', function() {
    expect(myAge.ageOnMars()).toEqual(51);
  });

  it('converts years on Earth to years on Jupiter', function() {
    expect(myAge.ageOnJupiter()).toEqual(320);
  });

  it('calculates life expectancy', function() {
    expect(myAge.lifeExpectancy("female", "northAmerica")).toEqual(84);
  });

  it('tells user how much time left to live', function() {
    expect(myAge.yearsLeftEarth(27, 85)).toEqual(58);
  });

  it('tells user how far past life expectancy lived', function() {
      expect(surpassExp.overLifeExpectancy(85, 75)).toEqual(10)
  });
});
