// function s(fname, lname, age, gender){
// 	give(fname,lname);
// 	window.open("/Users/WhiteshadoW/Desktop/Merchantrade/learn%20jquery/detail.html");
// 	alert(fname+lname+age+gender);
// 	// var detail = fname+lname+age+gender;
// 	return detail;
// }

// var firstname;

// function s(fname, lname, age, gender){
// 	window.open("/Users/WhiteshadoW/Desktop/Merchantrade/learn%20jquery/detail.html");
// 	alert(firstname)
// }

// $(document).ready(function(){
// 	s(fname, lname, age, gender)
// });

function s(fname, lname, age, gender){
	window.open("/Users/WhiteshadoW/Desktop/Merchantrade/learn%20jquery/detail.html?fname="+fname + "&lname="+ lname + "&age=" + age + "&sex="+gender);
}

$(document).ready(function(){
	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	var firstname = getUrlParameter('fname');
	var lastname = getUrlParameter('lname');
	var gender = getUrlParameter('sex');
	console.log("Hello");
	$("#demo").html(firstname + lastname + gender);
	console.log("World");
});