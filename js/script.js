$(document).ready(function() {
  $(".btn-default").on("click", function(e){
    e.preventDefault();


	var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyCLXwXnb5FasH9MVlYx0rRSzSqNkvRMRQI";
    googleApiUrl += "&address=" + userAddress;


    alert("hello");

    $.ajax({
    	type: "GET",
    	url: googleApiUrl,
    	success: getCoordinates 
    });
  });



});
