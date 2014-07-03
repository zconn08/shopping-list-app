$(document).ready(function(){
	//Remove an item
	$(".list_container").on("click",".delete",function(e){
		e.preventDefault();
		$(this).parent().remove();
	});
	//Change item to completed
	$(".list_container").on("click","li",function(e){
		e.preventDefault();
		$(this).toggleClass("completed");
		$(this).children(".checkbox").toggleClass("checked");
	});
	//Delete button appears when hovering over an item
	$(".list_container").on("mouseenter","li",function(){
		$(this).children(".delete").toggleClass("show");
	});
	$(".list_container").on("mouseleave","li",function(){
		$(this).children(".delete").toggleClass("show");
	});
});