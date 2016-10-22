'use strict';

require('./phoneNgDialog.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

appPortfolio.controller('PhoneNgDialogController', ['$log', '$location', 'ngDialog', PhoneNgDialogController]);

function PhoneNgDialogController($log, $location, ngDialog){
  $log.debug('PhoneNgDialogController');
  this.openModal = function(){
    ngDialog.open({
      template: require('./phoneNgDialog.html'),
      plain: true,
    });
  };
}
