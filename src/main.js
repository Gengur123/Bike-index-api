import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import StolenBike from './services/stolenbikesapi.js';

function displayStolenBikes(){
  $('.stolenbike').text(`Here are all the stolen bikes in your area ${filler}!`);
}

$(document).ready(function() {
  $('bikes').click(function(){
    

  })

});