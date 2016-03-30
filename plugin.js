// $.fn.greenify = function() {
// 	this.css('color', 'green');
// }

// $('p').greenify();

(function($) {
	$.fn.greenify = function() {
		this.css('color', 'green');
		return this;
	}
	$.fn.changeSize = function() {
		this.css('font-size', size + 'px')
	}
}(jQuery));

$('p').changeColor('red');