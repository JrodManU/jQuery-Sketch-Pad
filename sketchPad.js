$(document).ready(function() {

	//Generation
	var generate = function() {

		$("#container").empty();

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

		//Color the boxes
		$(".box").mouseenter(function() {

			$(this).css("background-color", "black");
		
		});

	}

	//Generate first time
	generate();

	//Reset button listener
	$("#reset").click(function() {

		generate();

	});

});