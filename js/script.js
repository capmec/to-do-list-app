//make a to-do-list using javascript and jQuery
//create a new list item when clicking on the "Add" button
//create a "close" button and append it to each list item
//click on a close button to hide the current list item
//add a "checked" symbol when clicking on a list item

function newItem() {
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
		$('#list').append(li);
		$('#input').val('');
	}

	//add a checked symbol when clicking on a list item
	li.on('dblclick', function crossOut() {
		li.toggleClass('strike');
	});
	//insert a delete button and when clicked, the list item will be deleted
	let deleteButton = $('<deleteButton></deleteButton>');
	$(deleteButton).append('X');
	li.append(deleteButton);
	deleteButton.on('click', function () {
		li.addClass('delete');
	});

	//reorder items
	$('#list').sortable();
}
