$(document).ready(function(){
	$(".students").css({"background": "red", "height" : "100px" ,"width": "200px"});

	$(".stdli").hide();

	$(".stdbtn").click(function(){
		$(".stdli").show();
		$(".students").css({"background": "blue", "height" : "auto", "width": "200px"});
	});
});