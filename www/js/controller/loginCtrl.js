appCtrl.controller('LoginCtrl', function($scope, $ionicModal,$ionicPopup, $timeout, $location, $state, LoginAPI) {

  $scope.loginData = {};

  // Crie o modo de login que usaremos mais tarde
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  
  //Ativado no modo de login para fechá-lo 
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Abra o modo de login
  $scope.login = function(loginData, face) {
    if(true){
         $scope.doLogin();
    }else{

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

    }
    
  };

  // Execute a ação de login quando o usuário envia o formulário de login
  $scope.doLogin = function() {

    console.log("DoLogin");
        openFB.login(
        function(response) {
          if(response.status === 'connected') {
            $scope.token = response.authResponse.accessToken;
            console.log('Token stored: ',response);
            alert('Ok, try to make a call now');
          } else {
            alert('Facebook login failed: ' + response.error);
          }
        }, {scope: 'email'}); 
  };

  window.addEventListener('load', function() {
    
      var webAuth = new auth0.WebAuth({
        domain: 'estacionar.auth0.com',
        clientID: 'gpjk557CnXkVHvpV-Qk3jHcSaWL_XrWL',
        responseType: 'token id_token',
        audience: 'https://estacionar.auth0.com/userinfo',
        scope: 'openid',
        redirectUri: window.location.href
      });
    
      var loginBtn = document.getElementById('btn-login');
    
      loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        webAuth.authorize();
      });
    });

});
