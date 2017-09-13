// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var appCtrl = angular.module('starter.controllers', []);
var appService = angular.module('starter.services', []);
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.config', 'ngCurrencyMask', 'ui.mask', 'ui.utils.masks', 'ngCordova'])

//angular.module('starter', ['ionic','starter.config', 'starter.controllers', 'starter.services', 'ngCurrencyMask', 'ui.mask', 'ui.utils.masks'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/inicio.html'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent' : {
        templateUrl : 'templates/login.html',
        controller : 'LoginCtrl'
      }
    }
  })

  .state('app.cadastrar-conta', {
    url: '/cadastrar-conta',
    views: {
      'menuContent' : {
        templateUrl : 'templates/cadastro.html',
        controller : 'CadastroCtrl'
      }
    }
  })

  .state('app.esqueci-senha', {
    url: '/esqueci-senha',
    views: {
      'menuContent' : {
        templateUrl : 'templates/esqueci-senha.html',
        controller : 'LoginCtrl'
      }
    }
  })


  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('menu.pesquisar', {
    url: '/pesquisar',
    views: {
      'menuContent': {
        templateUrl: 'templates/pesquisar.html', 
        controller: 'PesquisarCtrl'
      }
    }
  })

  .state('menu.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html', 
          controller: 'HomeCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
