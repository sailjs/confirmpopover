require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'confirmpopover', location: '../../../..', main: 'confirmpopover' },
    { name: 'events' },
    { name: 'dom' },
    { name: 'render' },
    { name: 'mocha-cloud', location: '../support', main: 'mocha-cloud' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
