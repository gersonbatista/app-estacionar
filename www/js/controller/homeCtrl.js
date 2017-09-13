appCtrl.controller('HomeCtrl', function($scope, $ionicModal,$ionicPopup, $timeout, $location, $state, $cordovaGeolocation, $window) {
    
  const messaging = firebase.messaging()
 
  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
  });
  
  
  
  /*
  const messaging = firebase.messaging();

    messaging.requestPermission()
    .then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });

    messaging.getToken()
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
        //sendTokenToServer(currentToken)
      } else {
        // you don't have permission to show notifications
        // detect whether they are blocked or not, then show your custom UI  
      }
    })
    .catch((err) => {
      // retrieving token failed, analyze the error
    })

    messaging.onMessage((payload) => {
      // message received
    })*/
    

    $scope.data = new Date();
    $scope.notificacoes = new Array();
    var notificacao  = {nome : "Teste",
                           placa: "OAB-1122",
                           fone: "(92) 9897-9697",
                           msg:"Retirar carro da vaga"}

     var notificacao2  = {nome : "Teste 2",
                           placa: "OAB-1122",
                           fone: "(92) 9897-9697",
                           msg:"Retirar carro da vaga"}

    $scope.notificacoes.push(notificacao);
    $scope.notificacoes.push(notificacao2);

    $scope.fazCheckin = function(){

       $window.navigator.geolocation.getCurrentPosition(function(position) {
        $scope.$apply(function() {
            $scope.lat = position.coords.latitude;
            $scope.lng = position.coords.longitude;

            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
            var request = {
                latLng: latlng
            };
            geocoder.geocode(request, function(data, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  if (data[0] != null) {
                     $ionicPopup.alert({
                        title: 'Localização',
                        template: 'Você realizou checkin no endereço: ' + data[0].formatted_address
                      }).then(function(){
                        localStorage.setItem("endereco", data[0].formatted_address);
                        return;     
                    });
                    
                } else {
                    $ionicPopup.alert({
                        title: 'Localização',
                        template: 'Não foi realizar checkin, verifique se sua Localização esta ativada.'
                      })
                }
                }
            })
        });   
      })
    };

    $scope.fazCheckout = function(){
      if(localStorage.getItem("endereco") != "null"){
        $ionicPopup.alert({
            title: 'Localização',
            template: 'Você deixou o endereço: ' + localStorage.getItem("endereco")
          }).then(function(){
              localStorage.setItem("endereco", null);
              return;     
          });
      } else{
        $ionicPopup.alert({
            title: 'Localização',
            template: 'Não existe endereço, realize checkin primeiro.'
          })
      } 
       
    };

    $scope.paginaPesquisar = function(){
      $state.go('menu.pesquisar');
    };
});