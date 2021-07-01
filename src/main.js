import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import StolenBike from './services/stolenbikesapi.js';

function displayStolenBikes(response){
  if (response){
  $('.stolenbike').text(`Here are all the stolen bikes in your area ${response}!`);
  }else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function() {
  $('#bikes').click(function(){
    let city = $('#location').val();
    let distance = $('#distance').val();
    StolenBike.getStolenBike(city, distance)
      .then(function(response) {
        if (response){
          displayStolenBikes(response)
        }
    })
  });
});
