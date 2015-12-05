$(document).ready(function() {
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    alert("hello");

    $.ajax({
    	type: "GET",
    	url: googleApiUrl,
    	success: getCoordinates 
    });
  });
});
