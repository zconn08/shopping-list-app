$(document).ready(function(){
	//Add an item
	$(".add_item_button").click(function(){
		var textbox = document.getElementById("add_item_input");
		var textval = textbox.value;
		if (textval !== "") {
			$('<li class="item"></li>').appendTo("#list_container").html('<div class="checkbox unchecked"></div><span class="item_text">'+ textval + '</span><div class="delete"></div>');
		}
		document.getElementById('add_item_input').value = '';
	});

	//Enter key to add item
	$(document).keyup(function(e){
		if (e.which==13) {
			$(".add_item_button").click();
		}
	});

	//Remove an item
	$(".delete").click(function(e){
		$(this).parent().remove();
	});

	//Change item to completed
	$("#list_container").on("click","li",function(e){
		$(this).toggleClass("completed");
		$(this).children(".checkbox").toggleClass("checked");
	});

	//Delete button appears when hovering over an item
	$("#list_container").on("mouseenter","li",function(){
		$(this).children(".delete").toggleClass("show");
	});
	$("#list_container").on("mouseleave","li",function(){
		$(this).children(".delete").toggleClass("show");
	});

	//Make items sortable
	$("#list_container").sortable({ axis: "y" });
});