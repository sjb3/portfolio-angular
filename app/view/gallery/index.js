'use strict';

//adapted from http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/
//pictures are from Murakami Takashi's exhibition at Versailles
require('./gallery.scss');

const angular = require('angular');
const appPortfolio = angular.module('appPortfolio');

// appPortfolio.directive('slider', function($timeout){
//   return {
//     restrict: 'AE',
//     replace: true,
//     scope: {
//       images: '=',
//     },
//     link: function(scope, elem, attrs){},
//     template: './gallery.html',
//     controller: 'SliderController',
//     controllerAs: 'sliderCtrl',
//   };
// });

appPortfolio.controller('SliderController', ['$log', 'ngAnimate', SliderController]);

function SliderController($log){
  $log.debug('SliderController');

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

  this.currentIndex = 0;
  this.setCurrentSlideIndex = function(index){
    this.currentIndex = index;
  };
  this.isCurrentSlideIndex = function(index){
    return this.currentIndex === index;
  };
  this.prevSlide = function(){
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++ this.currentIndex : 0;
  };
  this.nextSlide = function(){
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  };
}
