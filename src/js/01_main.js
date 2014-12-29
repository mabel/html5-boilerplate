requirejs.config({
  waitSeconds: 30,
  baseUrl: 'js',
  paths: {
	backbonbe:  'vendor/backbone-min',
	underscore: 'vendor/underscore-min',
	jquery:     'vendor/jquery.min',
	models:     '02_models',
	boxes:      '03_boxes',
	css:        '04_css',
	i18n:       '90_i18n',
	finish:     '99_finish',
  },

  shim: {
	backbone: {deps: ['underscore']},
	i18n: {deps: ['boxes', 'jquery']},
	finish: {deps: ['i18n']},
  }
});

require(['finish']);
