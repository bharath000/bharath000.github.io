'use strict';
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
     /*   .state('home', {
            url: '/home',
            templateUrl: 'view/partial-home.html'
        })*/
        .state('app', {
                url:'/',
                views: {
                   'header': {
                        templateUrl : 'view/header.html',
                    },
                    'content@': {
                        templateUrl : 'view/home.html',
                        //controller  : 'IndexController'
                    },
                   'footer': {
                        templateUrl : 'view/footer.html',
                    }
                }

            })
         .state('app.Publications', {
                url:'Publications',
                views: {
                    'content@': {
                        templateUrl : 'view/Publications.html',
                        //controller  : 'AboutController'
                    }
                }
            })
          .state('app.Experience', {
                url:'Experience',
                views: {
                    'content@': {
                        templateUrl : 'view/Experience.html',
                        //controller  : 'AboutController'
                    }
                }
            })
           .state('app.projects', {
                url:'projects',
                views: {
                    'content@': {
                        templateUrl : 'view/projects.html',
                        //controller  : 'AboutController'
                    }
                }
            })
            .state('app.Resume', {
                url:'Resume',
                views: {
                    'content@': {
                        templateUrl : 'view/Resume.html',
                        //controller  : 'AboutController'
                    }
                }
            })

        /*
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'view/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'view/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });*/
        
});
/*
routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});*/
