function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
function BreakfastCheck() {
  
  var checkBox = document.getElementById("brfchck");
  
  var text = document.getElementById("text");

  
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function getValue()
{
	var p1="1Fo";
	var p2="2Fo";
	var p3="3Fo";
	var p4="4Fo";
	
  var x=document.getElementById("sel");
  for (var i = 0; i < x.options.length; i++) {
       if(x.options[i].selected){
		   var p=x.options[i].value;
		  
		   
		    if(p==p1)
			{
				alert("1 Fő");
				 $( "#booking" ).load(window.location.href + " #booking" );
				
			}
			if(p==p2)
			{
				alert("2 Fő");
				 $( "#booking" ).load(window.location.href + " #booking" );
			}
			if(p==p3)
			{
				alert("3 Fő");
				 $( "#booking" ).load(window.location.href + " #booking" );
			}
			if(p==p4)
			{
				alert("4 Fő");
				 $( "#booking" ).load(window.location.href + " #booking" );
			}
     // alert(p);
		   
      }
  }
}




function getValue2()
{
	price =0;
	var cat="";
  var x=document.getElementById("category");
  for (var i = 0; i < x.options.length; i++) {
     if(x.options[i].selected){
		 cat=x.options[i].value;
		 alert(cat);
		 if(cat==2)
		{
			price=5000;
			document.getElementById("price").innerHTML = price;
			break;
			
		}
		else(cat==1)
		{
			price=6000;
			document.getElementById("price").innerHTML = price;
			break;

		}
		 
			
	 }
  }
  return cat;
}
