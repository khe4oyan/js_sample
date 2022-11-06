less_checker();

function less_checker() {
	const search = window.location.search.split('&');
	const name = search[1].split('=')[1].split('_').join(' ');

	const less_id = search[0].split('=')[1];
	show_message(name);

	try{
		all_lessons[less_id].show();
	} catch(e) {
		show_message(`Wrong page "${less_id}"`);
	}
}

function show_message(message_text) {
	const short_box = document.body;
	const message = document.createElement("h2");
	message.classList.add("empty__message");
	message.innerHTML = message_text;
	short_box.appendChild(message);
}