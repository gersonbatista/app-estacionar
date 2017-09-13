appService.factory("LoginAPI",
			['$http','constants',function($http,constants){

	var _login = function(login){
		return $http.post(constants.BASE_URL +"/auth/login",login);
	};
	
	return {
		login: _login
	};

}]);