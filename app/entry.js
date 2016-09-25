'use strict';

//webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngDialog = require('ng-dialog');

//angular modules
angular.module('appPortfolio', [ngRoute, ngDialog])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
    // controller: 'HomeController',
    // controllerAs: 'homeCtrl',
  })
//   .when('main', {
//     template: require('./view/main/main.html'),
//   })
  .otherwise({
    redirectTo: '/',
  });
}]);

//angular controllers
require('./view/home');
require('./view/ngDialog');
// require('./view/main');
