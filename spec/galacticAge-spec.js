//specs aren't testing because of failed to parse JSON error//
//these specs are what I would assume may pass//
//if moment was also working//

import { GalacticAge } from './../js/galacticAge.js';

describe('GalacticAge', () {
  let test_galacticAge;

  beforeEach(() {
    test_galacticAge = new GalacticAge("04/05/1990");
  });

  it('takes DOB input from user', function(){
    expect(test_galacticAge.birthdate).toEqual('04/05/1990')
  });

  it('determines age by the difference between current time and entered DOB', function(){
    expect(test_galacticAge.ageInYears()).toEqual(27)
  });

  it('takes user input of age in years on Earth and converts to seconds', function() {
    expect(test_galacticAge.ageInSeconds()).toEqual(851472000);
  });

  it('converts years on Earth to years on Mercury', function() {
    expect(test_galacticAge.ageOnMercury()).toEqual(6.48);
  });

  it('converts years on Earth to years on Venus', function() {
    expect(test_galacticAge.ageOnVenus()).toEqual(16.74);
  });

  it('converts years on Earth to years on Mars', function() {
    expect(test_galacticAge.ageOnMars()).toEqual(50.76);
  });

  it('converts years on Earth to years on Jupiter', function() {
    expect(test_galacticAge.ageOnJupiter()).toEqual(320.22);
  });
});
