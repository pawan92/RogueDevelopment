$(function() {
	
   function carousel() {
   	
   } 
});

var hideShow = (function() {
	function hideEl(elToHide) {
		if($(elToHide).hasClass(hide)) {
			console.log("it is hidden");
		}else if(!($(elToHide).hasClass(hide))) {
			$(elToHide).fadeOut();
			$(elToHide).addClass('hide');
		}
	}

	function showEl(elToShow) {
		if($(elToShow).hasClass('hide') ) {
			$(elToShow).removeClass('hide');
			$(elToShow).fadeIn();
		}else if(!($(elToShow).hasClass('hide'))) {
			console.log("it is hidden ");
		}
	}
	return {
		hideEl:hideEl,
		showEl:showEl 
	};
}());