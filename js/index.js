console.log("JS file loaded");

$(document).ready(function() {
    
    console.log("DOM is loaded and can be manipulated");
	
	$("#city-type").focus();
	//listen for update button to be clicked
	$("#submit-btn").click(changeCity);

	function changeCity() {
		//on click store the user's input
		var city = $("#city-type").val();
		//change user input to all lower case
		city = city.toLowerCase();
		//clear the input box and put focus back onto it
		$("#city-type").val("");
		$("#city-type").focus();

		console.log("city entered = " + city);

		//if input is NY make the background of the page nyc.jpg
		if (city === "nyc" || city === "new york" || city === "new york city"){
			$("body").attr("class", "nyc");
			} 
			//if input is SF make the background of the page sf.jpg
			else if (city === "san francisco" || city === "sf" || city === "bay area"){
			$("body").attr("class", "sf");
			}
				//if input is LA make the background of the page la.jpg
				else if (city === "los angeles" || city === "la" || city === "lax"){
				$("body").attr("class", "la");
				}
					//if input is austin make the background of the page austin.jpg
					else if (city === "austin" || city === "atx"){
					$("body").attr("class", "austin");
					}
						//if input is sydney make the background of the page sydney.jpg
						else if (city === "syndey" || city === "syd"){
						$("body").attr("class", "sydney");
						}
							//otherwise, throw an error message
							else {
								alert("I don't recognize this city. Please enter a valid city name.");
							}
		}

});