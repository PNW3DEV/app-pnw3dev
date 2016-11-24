// --------------------------------------
// tidi
// --------------------------------------
riot.route('/api/todo', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'todo');
	});
});
// --------------------------------------
// Login
// --------------------------------------
// console.log('routes');
riot.route('/api/login', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'login');
	});
});
// --------------------------------------
// Console
// --------------------------------------
// console.log('routes');
riot.route('/api/console', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'console');
	});
});
// --------------------------------------
// contact
// --------------------------------------
// console.log('routes');
riot.route('/api/contact', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'contact');
	});
});
// --------------------------------------
// ...
// --------------------------------------
// console.log('routes');
riot.route('/api/first/', function() {
	riot.compile(function() {
		console.log('The detail of ' + name)
		riot.mount('#preloader_container', 'first');
	});
});
// --------------------------------------
// ...
// --------------------------------------
// console.log('routes');
riot.route('/api/first/*', function(id) {
	riot.compile(function() {
		console.log('The detail of ' + firstDetail)
		riot.mount('#preloader_container', 'first' + firstDetail);
	});
});
// --------------------------------------
// contact
// --------------------------------------
// console.log('routes');
riot.route('/api/contact-detail/', function() {
	riot.compile(function() {
		riot.mount('#preloader_container', 'contact-detail');
	});
});
// --------------------------------------
// contact
// --------------------------------------
// console.log('routes');
riot.route('/api/contact-detail/*', function(id) {
	riot.compile(function() {
		console.log('The detail of ' + id)
		riot.mount('#preloader_container', 'contact-detail');
	});
});
