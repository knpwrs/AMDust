// Setup mocha
mocha.setup('bdd');

require.config({
	paths: {
		dust: '../../dust',
		dustc: '../../dustc'
	}
});

// Define testing variables
var helloOut = 'Hello, World!';
var listOut = '<ul><li>apple</li><li>orange</li><li>grape</li><li>banana</li></ul>';
var fruits = [{
	name: 'apple'
}, {
	name: 'orange'
}, {
	name: 'grape'
}, {
	name: 'banana'
}];

// Main test suite
describe('AMDust Tests', function () {
	it('should render an anonymous template', function (done) {
		require(['dust', 'dustc!tmpl/hello.dust'], function (dust, hello) {
			dust.render(hello, {name: 'World'}, function (err, out) {
				if (!err && out === 'Hello, World!') {
					done();
				} else {
					done(err);
				}
			});
		});
	});
	it('should render a named template with partials', function (done) {
		require([
			'dust',
			'dustc!list!tmpl/list.partial.dust',
			'dustc!main!tmpl/includepartial.dust'
		], function (dust, list, main) {
			dust.render(main, {fruits: fruits}, function (err, out) {
				if (!err && out === listOut) {
					done();
				} else {
					done(err);
				}
			});
		});
	});
	it('should properly render templates in subfolders using relative paths', function (done) {
		require(['dust', 'tmpl/subfolder/sub'], function (dust, sub) {
			var date = new Date();
			dust.render(sub, {date: date}, function (err, out) {
				if (!err && out === 'The current date and time is ' + date.toString() + '!') {
					done();
				} else {
					done(err);
				}
			});
		});
	});
});

// Run tests
mocha.run();