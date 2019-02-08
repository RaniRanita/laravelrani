$(function(){
	var current = window.localtion.href;
	$('ul.navbar-nav li a').each(function(){
	 var $this = $(this);
	 if($this.attr('href') == current){
	 	$this.parents('li').addClass('active');
	 }
	});
});