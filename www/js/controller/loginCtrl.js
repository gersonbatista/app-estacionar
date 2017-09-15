(function () {
  
    'use strict';
  
    angular
      .module('starter')
      .controller('LoginCtrl', loginController);
  
    loginController.$inject = ['authService', '$scope', '$ionicModal','$ionicPopup', '$timeout', '$location', '$state', 'LoginAPI'];
  
    function loginController(authService, $scope, $ionicModal,$ionicPopup, $timeout, $location, $state, LoginAPI) {
  
      var vm = this;
      vm.auth = authService;

         // Abra o modo de login
    vm.loginAplicacao = function(loginData) {
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
  
  }
  
  })();