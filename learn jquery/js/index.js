$(document).ready(function(){

	$("#clkbtn").hide();

	$("div").click(function(){
		alert("Hello World");
	});

	$("#text").click(function(){
		$(this).hide();
		$("#clkbtn").show();
	});

	$("#clkbtn").click(function(){
		$("#text").show();
		$(this).hide();
	})

	$("#mouseaction").on({
		mouseenter: function(){
			$(this).css({"color": "red", "font-style": "italic" });
		},

		mouseleave: function(){
			$(this).css({"color" : "blue", "font-style": "normal"});
		}
	});
});