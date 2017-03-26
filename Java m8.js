$(document).ready(function() {
	
	$("img").hide();
	
	$("h1").click(function() {
		$(this).next().slideToggle(300);
	});
	
	$("h2").mousedown(function() {
		$(this).css("background-color","yellow");
		$("img").slideToggle(750);
	});
  
	$("h2").mouseup(function() {
		$(this).css("background-color","transparent");
	});
});