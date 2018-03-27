/*Author:  http://themeforest.net/user/lorthemes // Bogdan Laurentiu */
/*Main Scripts*/

(function($){

    "use strict";
    
    // Specify your domain below. The search results will only be made for your website
    var domainroot = "site:www.yourwebsite.com"; 

    function hasScrolled() {
        var st = $(window).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }

    function Gsitesearch(curobj){
        curobj.q.value="site:"+domainroot+" "+curobj.qfront.value
    }

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    //Sliding Panel
    $(".btn-slide").click(function(){
        $("#panel").slideToggle("fast", "linear" );
        $(this).toggleClass("active-panel"); return false;
    });
    
    // LOAD DATA INTO THE CURRENT-DATE DIV
    $.ajax({
      url: "addons/date.php",
      success: function(data){
        $("#current-date").html(data);
      }
    }); 

    // PAGE PRELOADER

    $(window).load(function() {
      'use strict';

      $(window).scrollTop(0);
      $('#status').fadeOut();
      $('#preloader').delay(350).fadeOut('slow');

    });

 


    /**
     * RESPONSIVE MENU // DO NOT TOUCH! (unless you know what you're doing)
     */

    var page_wrapper = $('#page-wrapper'),
        responsive_trigger = $('.zn-res-trigger'),
        zn_back_text = 'go back',
        back_text = '<li class="zn_res_menu_go_back"><span class="zn_res_back_icon icon-angle-left"></span><a href="#">'+zn_back_text+'</a></li>',
        cloned_menu = $('#main-menu > ul').clone().attr({id:"zn-res-menu", "class":""});

    var start_responsive_menu = function(){

        var responsive_menu = cloned_menu.prependTo(page_wrapper);

        // BIND OPEN MENU TRIGGER
        responsive_trigger.click(function(e){
            e.preventDefault();
            
            responsive_menu.addClass('zn-menu-visible');
            set_height();

        });

        // ADD ARROWS TO SUBMENUS TRIGGERS
        responsive_menu.find('li:has(> ul)').addClass('zn_res_has_submenu').prepend('<span class="zn_res_submenu_trigger icon-angle-right"></span>');
        // ADD BACK BUTTONS
        responsive_menu.find('.zn_res_has_submenu > ul').addBack().prepend(back_text);

        // REMOVE BACK BUTTON LINK
        $( '.zn_res_menu_go_back' ).click(function(e){
            e.preventDefault();
            var active_menu = $(this).closest('.zn-menu-visible');
            active_menu.removeClass('zn-menu-visible');
            set_height();
            if( active_menu.is('#zn-res-menu') ) {
                page_wrapper.css({'height':'auto'});
            }
        });

        // OPEN SUBMENU'S ON CLICK
        $('.zn_res_submenu_trigger').click(function(e){
            e.preventDefault();
            $(this).siblings('ul').addClass('zn-menu-visible');
            set_height();
        });

    }

    var set_height = function(){
        var height = $('.zn-menu-visible').last().css({height:'auto'}).outerHeight(true),
            window_height  = $(window).height(),
            adminbar_height = 0,
            admin_bar = $('#wpadminbar');

        // CHECK IF WE HAVE THE ADMIN BAR VISIBLE
        if(height < window_height) {
            height = window_height;
            if ( admin_bar.length > 0 ) {
                adminbar_height = admin_bar.outerHeight(true);
                height = height - adminbar_height;
            }
        }

        $('.zn-menu-visible').last().attr('style','');
        page_wrapper.css({'height':height});
    };

    // MAIN TRIGGER FOR ACTIVATING THE RESPONSIVE MENU
    var menu_activated = false,
        triggerMenu = function(){
            if ( $(window).width() < 1200 ) {
                if ( !menu_activated ){
                    start_responsive_menu();
                    menu_activated = true;
                }
                page_wrapper.addClass('zn_res_menu_visible');
            }
            else{
                // WE SHOULD HIDE THE MENU
                $('.zn-menu-visible').removeClass('zn-menu-visible');
                page_wrapper.css({'height':'auto'}).removeClass('zn_res_menu_visible');
            }
        };
    $(document).ready(function() {
        triggerMenu();
    });
    $( window ).on( 'resize' , function(){
       triggerMenu();
    });


    //** Search functionality
    /* search icon show/hide */
    $(document).click(function () {
        //$('.searchForm').hide();
        $('.searchForm').removeClass('active');
    });
    $('.searchForm').click(function (e) {
        e.stopPropagation();
    });
    $('.searchPanel span').click(function (e) {
        e.stopPropagation();
        //if ($('.searchForm').css('display') == 'block') {
        if ($('.searchForm').hasClass('active')) {
            //$('.searchForm').hide();
            $('.searchForm').removeClass('active');
        } else {
            //$('.searchForm').show();
            $('.searchForm').addClass('active');
        }
    });


    // Scroll to top
    var pageHeaderBar = $('#page-wrapper > header'),
        backtop = $("#back-top");

    // hide #back-top first
    backtop.hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                backtop.fadeIn();
                pageHeaderBar.addClass('fillbg');
            } else {
                backtop.fadeOut();
                pageHeaderBar.removeClass('fillbg');
            }
        });

        // scroll body to 0px on click
        backtop.children('a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    // Circular Progress Bar
    $('.dial').each(function () { 

        var elm = $(this),
            color = elm.attr("data-fgColor"),
            perc = elm.attr("value");  

        elm.knob({ 
            'value': 0, 
            'min':0,
            'max':100,
            "skin":"tron",
            "readOnly":true,
            "thickness":.1,
            'dynamicDraw': true,
            "displayInput":false
        });

        $({value: 0}).animate({ value: perc }, {
            duration: 1000,
            easing: 'swing',
            progress: function () {
                elm.val(Math.ceil(this.value)).trigger('change')
            }
        });

        //circular progress bar color
        $(this).append(function() {
            elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
        });

    });

    // Price Filter
    var priceRange = $( ".price-range-slider" );
    $.each(priceRange, function(index, val) {
        var _t = $(this),
            priceResult = _t.parent().find(".price-result"),
            currency = priceResult.data('currency');
           
        _t.slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                priceResult.val( currency + ui.values[ 0 ] + " - "+ currency + ui.values[ 1 ] );
            }
        });
        priceResult.val( currency + _t.slider( "values", 0 ) + " - " + currency + _t.slider( "values", 1 ) );
    });

    /* Quantity controls */
    $(".cart-qty").each(function(index, el) {
        var cartQty = $(el),
            inp = cartQty.children("input"),
            math_it_up = {
                "+": function (x) { return parseFloat(x)+1 },
                "-": function (x) { return parseFloat(x)-1 }
            },
            inpVal;
        cartQty.children("button").on("click",function(event){
            event.preventDefault;
            inpVal = math_it_up[$(this).data("operator")]( inp.val() );
            if(inpVal >= 1)
                inp.attr("value", inpVal );
        });
    });


    // Mailchimp integration
    // SUBSCRIBE FORM
    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache       : false,
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) {
                var themessage = $('<span class="alert alert-danger"><button type="button" class="close icon-close" data-dismiss="alert" aria-hidden="true"></button>Could not connect to server. Please try again later.</span>');
                $('#notification_container').html(themessage);
                setTimeout(function(){
                    themessage.addClass('animate');
                }, 300)
            },
            success     : function(data) {
                if (data.result != "success") {
                    var message = data.msg.substring(4),
                    themessage = $('<span class="alert alert-warning"><button type="button" class="close icon-close" data-dismiss="alert" aria-hidden="true"></button>'+message+'</span>');
                    $('#notification_container').html(themessage);
                    setTimeout(function(){
                        themessage.addClass('animate');
                    }, 300);
                } 
                else {
                    var message = data.msg,
                    themessage = $('<span class="success alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">Ã—</button>'+message+'</span>');
                    $('#notification_container').html(themessage);
                    setTimeout(function(){
                        themessage.addClass('animate');
                    }, 300)
                }
            }
        });
    }
    var $form = $('#mc-embedded-subscribe-form');
    $('#mc-embedded-subscribe').on('click', function(event) {
        if(event) event.preventDefault();
        register($form);
    });

    // Isotope
    $(window).load(function(){

        if($.fn.isotope != 'undefined') {
        // init Isotope
            var $container = $('.portfolio-wrapper');
            if($container.length > 0) {
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                // filter functions
                var filterFns = {
                // show if number is greater than 50
                    numberGreaterThan50: function() {
                        var number = $(this).find('.number').text();
                        return parseInt( number, 10 ) > 50;
                    },
                    // show if name ends with -ium
                    ium: function() {
                        var name = $(this).find('.name').text();
                        return name.match( /ium$/ );
                    }
                };
                // bind filter button click
                $('#portfolio-filters').on( 'click', 'li', function() {
                    var filterValue = $( this ).attr('data-filter');
                    // use filterFn if matches value
                    filterValue = filterFns[ filterValue ] || filterValue;
                    $container.isotope({ filter: filterValue });
                });
                // change is-checked class on buttons
                $('.filters-nav').each( function( i, buttonGroup ) {
                    var $buttonGroup = $( buttonGroup );
                    $buttonGroup.on( 'click', 'li', function() {
                        $buttonGroup.find('.is-active').removeClass('is-active');
                        $( this ).addClass('is-active');
                    });
                });
            }
        }
    });

})(jQuery);