$(function() {
    let important = false;
    let controller= 0;
    let winStat = 0;
    
$('#roller').click(function() {
	let result = Math.floor(Math.random() * 6) + 1;
    $('#dice').val(result);
    let imgDie = "./pic/dice" + result + ".png";
    $('#die').prop('src',imgDie);
    
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

