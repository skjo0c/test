function pop(){
	document.getElementById(alert("You clicked me!!"))
}

function detail(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var gender = document.querySelector("input[name = 'gender']:checked").value;
	alert("Hello " + name + ". Your age is: " + age + ". And your gender is: " + gender);
}

function dem(){
	var txt;
	var person = prompt("Write your name here: ", "Hello");
	if(person != null){
		txt = "Hello " + person
	}
	document.getElementById("fullname").innerHTML = txt;
}