'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngDialog = require('ng-dialog');
const ngAnimate = require('angular-animate');

// angular modules
angular.module('appPortfolio', [ ngRoute, ngDialog, ngAnimate ])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
  })
  .when('/main', {
    template: require('./view/main/main.html'),
    controller: 'MainNavController',
    controllerAs: 'mainNavCtrl',
  })
  .when('/about', {
    template: require('./view/about/about.html'),
  })
  .otherwise({
    redirectTo: '/',
  });
}]);

// angular services

// angular controllers
require('./view/home');
require('./view/ngDialog');
require('./view/main');
require('./view/about');
require('./view/emailNgDialog');
require('./view/phoneNgDialog');
require('./components/nav');
require('./components/ham');
