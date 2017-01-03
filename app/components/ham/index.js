'use strict';

require('./ham.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

appPortfolio.component('appHam', {
  template: require('./ham.html'),
  controller: 'HamController',
});

appPortfolio.controller('HamController', ['$log', HamController]);

function HamController($log){
  $log.debug('HamController: ');
  this.showNav = true;
}
