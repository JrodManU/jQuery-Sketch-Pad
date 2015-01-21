$(document).ready(function() {

	//Generation
	var generate = function() {

		$("#container").empty();

		var mouseDown = false;
		var canvasSize = 600;
		$("#container").width(canvasSize);
		$("#container").height(canvasSize);
		var resolution = prompt("Please enter how many pixels wide the grid should be.", "16");
		var pixelSize = canvasSize / resolution;
		var $row = "<div class=\"row\" style=\"width:" + canvasSize + "px;height:" + pixelSize + "px;\"></div>";
		var $box = "<div class=\"box\" style=\"width:" + pixelSize + "px;height:" + pixelSize + "px;\"></div>";

		for(var i = 0; i < resolution; i++) {

			$("#container").append($row);

		}

		for(var i = 0; i < resolution; i++) {

			$(".row").append($box);

		}

		//Sensor stuff that needs to be local

		//Detect if mouse is down
		$(".box").mousedown(function() {

			mouseDown = true;
			//Accounts for first box
			color($(this));

		});

		$(".box").mouseup(function() {

			mouseDown = false;

		});

		//Turn off if leaving the container
		$("#container").mouseleave(function() {

			mouseDown = false;

		});

		//Detect if entering new boxes
		$(".box").mouseenter(function() {

			if(mouseDown) {

				color($(this));

			}
			
		});

	}

	//Generate first time
	generate();

	//Reset button listener
	$("#reset").click(function() {

		generate();

	});

	//Determines what to do with the box
	function color(box) {

		switch($('input[name="style"]:checked').val()) {

			case "trail":
				box.css("opacity", 0);
				box.fadeTo(300, 1);
				break;
			case "fade":
				box.css("opacity", box.css("opacity") - .1);
				break;
			default:
				if(box.css("opacity") == 1) {
					box.css("opacity", 0);
				} else {
					box.css("opacity", 1);
				}
				break;
		}

	}

});