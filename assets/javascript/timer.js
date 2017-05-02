var x;
function playtime(cinterval) 
	{
		
				clearInterval(x);
			   $("#mid-col").empty();
	}

			var countDownDate = 61;
			var now =0;
			var seconds =0;
			var distance=0;
		// Update the count down every 1 second
		x = setInterval(function() {

	  	now = now+1;

	  // Find the distance between now an the count down time
		distance = countDownDate - now;

	 	seconds = Math.floor((distance % (1000 * 60)));

	  // Display the result in the element with id="timer-panel"
	  $("#mid-col").html("<h1><center><b>"+seconds + "</b></center></h1>") ;

	  if (seconds <= 1) 
		  	{
			    clearInterval(x);
			   $("#mid-col").html("<h3><center>TIME UP</center></h3>");
		//	  	ls=ls+1;
		//	  	updateScore();
		  	}

	  // If the count down is finished, write some text 
	  if (seconds <= 10) 
		  	{
			   // clearInterval(x);
			 	document.getElementById('mid-col').style.backgroundColor ="red"
			  	document.getElementById('mid-col').style.color ="blue" 
		  	}

	  
		}, 1000);
	