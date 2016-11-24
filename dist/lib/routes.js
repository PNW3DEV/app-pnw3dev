// --------------------------------------
// tidi
// --------------------------------------
riot.route('/todo', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'todo');
	});
});
// --------------------------------------
// Console
// --------------------------------------
// console.log('routes');
riot.route('/console', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'console');
	});
});
