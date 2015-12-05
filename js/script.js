$(document).ready(function() {
  $(".btn-default").on("click", function(e){
    e.preventDefault();

		var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyCLXwXnb5FasH9MVlYx0rRSzSqNkvRMRQI";
    googleApiUrl += "&address=" + userAddress;

    $.ajax({
    	type: "GET",
    	url: googleApiUrl,
    	success: getCoordinates 
    });

  });

  function getCoordinates(){
    var geoLocation = response.results[0].geometry.location;
    var flickrApiUrl = "https://api.flickr.com/services/rest/?";
    var flickrApiParams = {
      api_key: "5d0b99b598780adb1ce7f682110a03e6",
      method: "flickr.photos.search",
      format: "json",
      nojsoncallback: 1,
      lat: geoLocation.lat,
      lon: geoLocation.lng
    }
    
    $.ajax({
      type: "GET",
      url: flickrApiUrl + $.param(flickrApiParams),
      success: flickrSuccessHandler
    });
  }

});


