'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngDialog = require('ng-dialog');

// angular modules
angular.module('appPortfolio', [ngRoute, ngDialog])
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
  .when('/gallery', {
    template: require('./view/gallery/gallery.html'),
    controller: 'CarouselController',
    controllerAs: 'carouselCtrl',
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
require('./view/gallery');
// require('./app-main');
