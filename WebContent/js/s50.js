/**
 * s50.js
 * 
 * Slide 50
 */
$(function() {
    $('#colorOn').click(function() {
        $('#msg1').addClass('red');
    });

    $('#colorOff').click(function() {
        $('#msg1').removeClass('red');

    });

    $('#swapColor').click(function() {
        $('#msg2').toggleClass('red');
    });
    
    $('#buttRed').click(function() {
    	let cur = $('#msg3');
        cur.removeClass('yellow');        
        cur.addClass('red');
    });
    
    $('#buttYel').click(function() {        
    	let cur = $('#msg3')
    	cur.removeClass('red');
    	cur.addClass('yellow');
    });
    
});
