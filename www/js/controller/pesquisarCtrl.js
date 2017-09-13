appCtrl.controller('PesquisarCtrl', function($scope, $ionicModal,$ionicPopup, $timeout, $location, $state, VeiculoAPI) {

$scope.pesquisar = function(placa){

     if(placa) {  
        if(placa == 'aaa9999'){
            $scope.existeVeiculo = true;
            $scope.veiculo  = {nome : "Teste",
                           placa: "AAA-9999",
                           fone: "(92) 9897-9697",
                           saida:"Previsão de saída"}
        }

        /*VeiculoAPI.pesquisar(placa).then(function(results) {
            $scope.veiculo = results.data.d.results;
            setTimeout(function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });
        })*/
    }
   
};

});