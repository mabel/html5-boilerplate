requirejs.config({
  waitSeconds: 30,
  baseUrl: 'js',
  paths: {
	backbonbe:  'vendor/backbone-min',
	underscore: 'vendor/underscore-min',
	jquery:     'vendor/jquery.min',
	boxes:      '02_boxes',
	css:        '03_css',
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
