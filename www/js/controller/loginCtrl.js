(function () {
  
    'use strict';
  
    angular
      .module('starter')
      .controller('LoginCtrl', loginController);
  
    loginController.$inject = ['$scope', '$ionicModal','$ionicPopup', '$timeout', '$location', '$state', 'LoginAPI', '$auth'];
  
    function loginController($scope, $ionicModal,$ionicPopup, $timeout, $location, $state, LoginAPI, $auth) {
  
      //var vm = this;
      //vm.auth = authService;

         // Abra o modo de login
    $scope.loginAplicacao = function(loginData) {
       if(!loginData){
        $ionicPopup.alert({
              title: 'Erro',
              template: 'Preencha os campos para realizar o login'
            }).then(function(){
              return;     
        });
      }

      if(!loginData.username || !loginData.password ){
        $ionicPopup.alert({
              title: 'Erro',
              template: 'Preencha os campos para realizar o login'
            }).then(function(){
              return;     
        });
      }

      LoginAPI.login(loginData).then(
        function(response) {
          window.localStorage.setItem('usuario',JSON.stringify(response.data));
          $state.go('menu.home');
          
        }
      ).catch(function(erro){
      $ionicPopup.alert({
              title: 'Erro',
              template: erro.data
            }).then(function(){
              
            });
      });
    };


    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  
  }
  
  })();