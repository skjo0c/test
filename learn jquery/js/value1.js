var fname, lname, age, gender;

$(document).ready(function(){
	$("#sub").click(function(){
		 fname = $("input[name= 'fname']").val();
		 lname = $("input[name= 'lname']").val();
		 age = $("input[name= 'age']").val();
		 gender = $("input[name= 'gender']:checked").val();
		 // s(fname, lname, age, gender);
		 // alert(fname);
		 s(fname, lname, age, gender);
	});
});


