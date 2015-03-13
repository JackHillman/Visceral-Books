$(document).ready(function() {

var text = ["We are Visceral Books", "We <span>live</span> for the stories.", "We <span>love</span> the drama.", "We <span>crave</span> the success.", "We <span>feel</span> the romance."];

$("h5").html("We are Visceral Books");

	var x = false;

	function myLoop(i) {          
	   setTimeout(function () {   
		    $("h5").html(text[i-1]).fadeTo(250, 1).delay(2500);
			if (i != 1) {
				$("h5").fadeTo(250, 0);
			}

			console.log(i);
			i--;
	      if (i > 0) {myLoop(i);}
	   }, 3000)
	};

	$("h5").delay(2750).fadeTo(250, 0);
	myLoop(text.length);

});