$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});



$(function(){
	$( '#dl-menu' ).dlmenu();
});




	$(window).load(function() {
		  $('#full_feature').swipeslider();
		  $('#content_slider').swipeslider({
			transitionDuration: 600,
			autoPlayTimeout: 10000,
			sliderHeight: '300px'
		  });
		  $('#responsiveness').swipeslider();
		  $('#customizability').swipeslider({
			transitionDuration: 1500, 
			autoPlayTimeout: 4000, 
			timingFunction: 'cubic-bezier(0.38, 0.96, 0.7, 0.07)',
			sliderHeight: '30%'});
		});
		
		

	$(document).ready(function() {
		var widget = $('.tabs-qh');
		var tabs = widget.find('dl a'),
			content = widget.find('.tabs-content > div');
		tabs.on('click', function (e) {
			e.preventDefault();
			// Get the data-index attribute, and show the matching content div
			var index = $(this).data('index');
			tabs.removeClass('tab-now');
			content.removeClass('now');
			$(this).addClass('tab-now');
			content.eq(index).addClass('now');
		});
	});
		