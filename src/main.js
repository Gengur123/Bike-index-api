import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import StolenBike from './services/stolenbikesapi.js';




function displayStolenBikes(response){
  if (response) {
    $('.stolenbike').empty();
    for (let i =0; i < response.bikes.length; i++) {
  $('.stolenbike').append(`
  <tr>
    <td>${response.bikes[i].manufacturer_name}</td>
    <td><a href="${response.bikes[i].url}">${response.bikes[i].url}</a></td>
  </tr>`);
  }
  } else 
  {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function() {
  $('#bikes').click(function(){
    let city = $('#location').val();
    let distance = $('#distance').val();
    StolenBike.getStolenBike(city, distance)
      .then(function(response) {
          displayStolenBikes(response)
          console.log(response)
    })
  });
});
