'use strict';

//adapted from angularjstech.blogspot.com/
//pictures are from Murakami Takashi's exhibition at Versailles
require('./gallery.scss');


const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

//Controller for Carousel
appPortfolio.controller('CarouselController', ['$log', '$location', CarouselController]);

function CarouselController($log, $location){
  $log.debug('CarouselController');

  this.backToMenu = function(){
    $location.path('/main');
  };
  // initializing the time interval
  this.myInterval= 3000;

  //initializing slide array
  this.slides = [{
    image: '../../assets/galleryFolder/GF01.jpg',
  }, {
    image: '../../assets/galleryFolder/GF02.jpg',
  }, {
    image: '../../assets/galleryFolder/GF03.jpg',
  }, {
    image: '../../assets/galleryFolder/GF04.jpg',
  }, {
    image: '../../assets/galleryFolder/GF05.jpg',
  }, {
    image: '../../assets/galleryFolder/GF06.jpg',
  }, {
    image: '../../assets/galleryFolder/GF07.jpg',
  }, {
    image: '../../assets/galleryFolder/GF08.jpg',
  }, {
    image: '../../assets/galleryFolder/GF09.jpg',
  }, {
    image: '../../assets/galleryFolder/GF10.jpg',
  }, {
    image: '../../assets/galleryFolder/GF11.jpg',
  }, {
    image: '../../assets/galleryFolder/GF12.jpg',
  }, {
    image: '../../assets/galleryFolder/GF13.jpg',
  }, {
    image: '../../assets/galleryFolder/GF14.jpg',
  }, {
    image: '../../assets/galleryFolder/GF15.jpg',
  }, {
    image: '../../assets/galleryFolder/GF16.jpg',
  }, {
    image: '../../assets/galleryFolder/GF17.jpg',
  }];
  //
  // var slides = this.slides;
  $log.debug('slides', this.slides);
}

// 'use strict';
//
// const angular = require('angular');
// const appPortfolio = angular.module('appPortfolio');
//
// appPortfolio
// .directive('appGallery', function(){
//   return {
//     restrict: 'E',
//     // replace: true,
//     template: require('./gallery.html'),
//     controller: 'GalleryController',
//     controllerAs: 'galleryCtrl',
//     bindToController: true,
//     scope: {
//       list: '=',
//     },
//   };
// })
// .controller('GalleryController', ['$log', GalleryController]);
//
// function GalleryController($log){
//   $log.debug('GalleryController');
//
//   this.galleryStyle = 'image';
//
//   imageService.addImage({
//     title: 'Murakami01',
//     imgUrl: require('../../assets/galleryFolder/GF01.jpg'),
//   }),
//   imageService.addImage({
//     title: 'Murakami02',
//     imgUrl: require('../../assets/galleryFolder/GF02.jpg'),
//   });
//
//   this.images = imageService.images;
//   this.selectGalleryStyle = function(style){
//     if(style ==='image')
//       this.galleryStyle = style;
//     return this.galleryStyle;
//   };
// }
