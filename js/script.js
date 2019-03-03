$(function(){

console.log(0);
	$('.ham').on('click', function(){
		$('.menu-list').slideToggle(300);
		$(this).children().toggleClass('open');
	});
});