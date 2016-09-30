'use strict';

require('./emailNgDialog.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

appPortfolio.controller('EmailNgDialogController', ['$log', '$location', 'ngDialog', EmailNgDialogController]);

function EmailNgDialogController($log, $location, ngDialog){
  $log.debug('EmailNgDialogController');
  this.openModal = function(){
    ngDialog.open({
      template: require('./emailNgDialog.html'),
      plain: true,
    });
  };
}
