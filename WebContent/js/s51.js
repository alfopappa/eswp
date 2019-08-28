/**
 * s51.js
 * 
 * Slide 51
 */
$(function() {
    let important = false;

    $('#changeMsg1').click(function() {
        let msg = $('#msg1');
        $('#target').html(msg.html());
        if (important) {
            msg.html('An <b>important</b> message');
        } else {
            msg.html('A <i>plain</i> message');
        }
        important = !important;
    });

    $('#changeTextMsg1').click(function() {
        let msg = $('#msg1');
        $('#target').text(msg.text());
        if (important) {
            msg.text('An <b>important</b> message');
        } else {
            msg.text('A <i>plain</i> message');
        }
        important = !important;
    });

    $('#changeMsg2').click(function() {
        let msg = $('#msg2');
        $('#target').text(msg.val());
        if (important) {
            msg.val('Important');
        } else {
            msg.val('Plain');
        }
        important = !important;
    });

    $('#upsize').click(function() {
        let msg = $('#msg3');
        let cur = parseInt(msg.css('font-size'));
        msg.css('font-size', cur * 2);
    });

    $('#downsize').click(function() {
        let msg = $('#msg3');
        let cur = parseInt(msg.css('font-size'));
        msg.css('font-size', cur > 1 ? cur / 2 : 1);
    });
    
    
    $('#roller').click(function() {
    	let result = Math.floor(Math.random() * 6) + 1;
        $('#dice').val(result);
        
        let elemento;
        if(result > 3) {
        	elemento = $('<div> You have won!</div>').css({color: 'green'});
                       } 
        else {
        	elemento = $('<div> You have lost!</div>').css({color: 'red'});
        	 }
        
        elemento.appendTo('#results');
        
        $('#history').text($('#history').text() + (result > 3 ? 'You have won!\n' : 'You have lost!\n'));
    });
        
});

