import { GalacticAge } from './../js/galacticAge.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    $('#dateShow').text(moment());
      let birthdate = $('#birthdate').val();
      let gender = $('input[name=gender]:checked').val();
      let continent = $('select#continent:selected').val();
      let exercise = $('input[name=exercise]:checked').val();
      let smoker = $('input[name=smoker]:checked').val();
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
    });
  });

$(document).ready(function(){
  $('#time').text(moment());
});
