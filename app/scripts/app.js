'use strict';

/**
 * @ngdoc overview
 * @name simulationApp
 * @description
 * # simulationApp
 *
 * Main module of the application.
 */
angular
  .module('simulationApp', ['ui.router'])
  .controller('main',['$scope',function($scope){
  	
  }])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('public',{
  		url:'/public',
//		controller:'public',
  		templateUrl:'views/public.html'
  	}).state('error',{
  		url:'/error',
//		controller:'error',
  		templateUrl:'404.html'
  	}).state('public.cds',{
  		url:'/cds',
//		controller:'cdsController',
  		templateUrl:'views/homepage.html'
  	}).state('public.brand',{
  		url:'/brand',
//		controller:'brand',
  		templateUrl:'views/brand.html'
  	})
  	$urlRouterProvider.when('','/public/brand').otherwise('/error')
  	
  }])
