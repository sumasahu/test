$(document).ready(function(){
	/*JS for range slider Start*/
	  $( function() {
		  var tooltip = $('<div id="tooltip" />').css({
		position: 'absolute',
		top: -20,
		left: 3
		}).hide();
		$( "#slider" ).slider({
			range: "min",
			value: 0,
			min: 0,
			max: 100,
			step: 1,
			slide: function(event, ui) {
				tooltip.text(ui.value);

			}
		}).find(".ui-slider-handle").append(tooltip).hover(function() {
		tooltip.show()
	}, function() {
		tooltip.hide()
	});
	  } );
	/*JS for range slider end*/
});