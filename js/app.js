$(document).ready(function()
	{
		$('.Ryu-Cool').hide();
$('.Image-Display').mouseenter(function()
   {
     $('.Ryu-Ready').show();
     $('.Ryu-Still').hide();
     $('.Ryu-Cool').hide();     
    })


.mouseleave(function()
{
     $('.Ryu-Ready').hide();
     $('.Ryu-Cool').hide(); 
     $('.Ryu-Still').show();
})

.mousedown(function()
{
	Control_Hadouken();
	$('.Ryu-Ready').hide();
    $('.Ryu-Cool').hide();	
	$('.Ryu-Still').hide();
	$('.Ryu-Fire').show();
	$('.Hadouken').finish().show().animate(
		{'left':'40em'},
		500,
		function()
		{
			$(this).hide();
			$(this).css('left','5em');
		});
})

.mouseup(function(){
$('.Ryu-Fire').hide();
$('.Ryu-Still').hide();
$('.Ryu-Cool').hide();
$('.Ryu-Ready').show();
});

 
$(document).keydown(function( event ) {
  if ( event.which == 88 ) {

$('.Ryu-Cool').show();
$('.Ryu-Ready').hide();
$('.Ryu-Still').hide();
$('.Ryu-Fire').hide();
 }
});

$(document).keyup(function( event ) {
  if ( event.which == 88 ) {

$('.Ryu-Cool').hide();
$('.Ryu-Still').hide();
$('.Ryu-Fire').hide();
$('.Ryu-Ready').show();
 }
});

/*
$('div#Container').bind( 'keydown', function( event ) {
	alert('Display');
  if ( event.which == 88 )
  {

$('.Ryu-Ready').hide();
$('.Ryu-Still').hide();
$('.Ryu-Fire').hide();
$('.Ryu-Cool').show();
  }
});*/


});

function Control_Hadouken()
{
    $('#Hadouken-Sound')[0].volume = 0.5;
	$('#Hadouken-Sound')[0].load();
	$('#Hadouken-Sound')[0].play();
}

