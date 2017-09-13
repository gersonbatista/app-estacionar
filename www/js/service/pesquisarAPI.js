appService.factory("VeiculoAPI",
			['$http','constants',function($http,constants){

	var _pesquisar = function(placa){
		return $http.post(constants.BASE_URL +"/pesquisar",placa);
	};
	
	return {
		pesquisar: _pesquisar
	};

}]);