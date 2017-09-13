appCtrl.controller('CadastroCtrl', function($scope, $ionicModal,$ionicPopup, $timeout, $location, $state, CadastroAPI) {

$scope.cadastro = function(form){
    if(form){
        CadastroAPI.cadastro(form).then(
        function(response) {
            $ionicPopup.alert({
                    title: 'Sucesso',
                    template: 'Mensagem de sucesso'
                }).then(function(){
                     $state.go('menu.home');
                });
            
        }).catch(function(erro){
            $ionicPopup.alert({
                    title: 'Erro',
                    template: erro.data
                }).then(function(){
                    
                });
            });
    }else{
        $ionicPopup.alert({
            title: 'Erro',
            template: 'Informe os dados obrigatórios para criar uma nova conta'
             }).then(function(){
            
            });
    }
};

});