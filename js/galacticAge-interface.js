import { GalacticAge } from './../js/galacticAge.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    $('#dateShow').text(moment());
      let birthdate = $('#birthdate').val();
      let gender = $('input[name=gender]:checked').val();
      let continent = $('select#continent:selected').val();
      $('#birthdateShow').text(birthdate);
      let userAge = new GalacticAge(birthdate);
      let userAgeEarth = userAge.ageInYears();
      $('#ageEarth').text(userAgeEarth);
      let userAgeSeconds = userAge.ageInSeconds();
      $('#ageSeconds').text(userAgeSeconds);
      let userAgeMercury = userAge.ageOnMercury();
      $('#ageMercury').text(userAgeMercury);
      let userAgeVenus = userAge.ageOnVenus();
      $('#ageVenus').text(userAgeVenus);
      let userAgeMars = userAge.ageOnMars();
      $('#ageMars').text(userAgeMars);
      let userAgeJupiter = userAge.ageOnJupiter();
      $('#ageJupiter').text(userAgeJupiter);
      let yearsLeftOnEarth = userAge.yearsLeftEarth(gender, continent);
      $('#timeLeftEarth').text(yearsLeftEarth);
      let yearsLeftOnMercury = userAge.yearsLeftMercury(gender, continent);
      $('#timeLeftMercury').text(yearsLeftEarth);
      let yearsLeftOnVenus = userAge.yearsLeftVenus(gender, continent);
      $('#timeLeftVenus').text(yearsLeftEarth);
      let yearsLeftOnMars = userAge.yearsLeftMars(gender, continent);
      $('#timeLeftMars').text(yearsLeftEarth);
      let yearsLeftOnJupiter = userAge.yearsLeftJupiter(gender, continent);
      $('#timeLeftJupiter').text(yearsLeftEarth);
    });
  });
