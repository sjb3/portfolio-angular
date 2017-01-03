'use strict';

require('./nav.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

appPortfolio.component('appNav', {
  template: require('./nav.html'),
});

// appPortfolio.controller('TakemehomeController', ['$log', '$location', TakemehomeController]);
//
// function TakemehomeController($log, $location){
//   $log.debug('TakemehomeController');
//
//   this.letsgotoAbout = function(){
//     $location.path('/about');
//   };
// }
