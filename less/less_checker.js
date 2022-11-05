function less_checker() {
	const less_id = window.location.search.split('=')[1];

	all_lessons[less_id].show();
}
less_checker();