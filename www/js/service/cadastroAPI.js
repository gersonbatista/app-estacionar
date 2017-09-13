appService.factory("CadastroAPI",
			['$http','constants',function($http,constants){

	var _cadastro = function(form){
		return $http.post(constants.BASE_URL +"/auth/novaconta",form);
	};
	
	return {
		cadastro: _cadastro
	};

}]);