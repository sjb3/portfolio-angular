// 'use strict';
//
// require('./main.scss');
//
// const angular = require('angular');
// const appPortfolio = angular.module('appPortfolio');
//
// appPortfolio.controller('MainNavController', ['$log', '$location', MainNavController]);
//
// function MainNavController($log, $location){
//   $log.debug('MainNavController');
//
//   this.homeFontAwesome = function(){
//     $location.path('/');
//   };
//
//   this.aboutFontAwesome = function(){
//     $location.path('/about');
//   };
//
//   // this.emailFontAwesome = function(){
//   //   $location('www.github.com/sjb3');
//   // };
// }

'use strict';

require('./main.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

appPortfolio.controller('MainNavController', ['$log', '$location', MainNavController]);

function MainNavController($log, $location){
  $log.debug('MainNavController');

  this.homeFontAwesome = function(){
    $location.path('/');
  };

  this.aboutFontAwesome = function(){
    $location.path('/about');
  };

  this.gitHubFontAwesome = function(){
    $location('www.github.com/sjb3');
  };
}
