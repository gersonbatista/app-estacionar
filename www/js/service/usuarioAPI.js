angular.module("services").factory("UsuarioAPI", ['$http', 'BaseAPI', function($http, BaseAPI) {
	
	var api = BaseAPI.createAPI('usuario');
				
	api.listarUsuarios = function(nome, departamento) {
		return $http.get(this.BASE_URL, {params: {nome: nome, idDepartamento: departamento}});
	};
	
	api.listarGruposDisponiveis = function(cpf) {
		return $http.get(this.BASE_URL+"gruposDisponiveis/"+cpf);
	};
	
	return api;

}]);