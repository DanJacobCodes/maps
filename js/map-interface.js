var Map = require('./../js/map.js').mapModule;


$(document).ready(function() {
  var currentMapObject = new Map();
  $('#location-button').submit(function() {
    event.preventDefault();
    var longitude = parseInt($('#longitude').val());
    var latitude = parseInt($('#latitude').val());
    currentMapObject.getMap();
  });
});
