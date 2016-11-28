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
