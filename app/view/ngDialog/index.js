'use strict';

require('./ngDialog-html.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

appPortfolio.controller('NgDialogController', ['$log', '$location', 'ngDialog', NgDialogController]);

function NgDialogController($log, $location, ngDialog){
  $log.debug('NgDialogController');
  this.openModal = function(){
    ngDialog.open({
      template: require('./ngDialog.html'),
      plain: true,
    });
  };
//
  this.leaveButton = function(){
    // $log.debug('Leave');
    $location.path('/');
    ngDialog.close();
  };
//
  this.enterButton = function(){
    // $log.debug('Enter');
    $location.path('/main');
    ngDialog.close();
  };
}
