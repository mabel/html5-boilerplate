requirejs.config({
  waitSeconds: 30,
  baseUrl: 'js',
  paths: {
	h5bp: 'vendor/h5bp',
	modernizr: 'vendor/modernizr-2.8.3.min'
	backbonbe: 'vendor/backbone-min',
	jquery: 'vendor/jquery-2.1.3.min',
	underscore: 'vendor/underscore-min'
  },

  shim: {
	backbone: {deps: ['underscore']},
  }
});

require(['h5bp', 'modernizr']);
