angular.module("services").factory("BaseAPI",
			['$http', 'constants', function($http, constants){
	
	function createAPI(resource) {
		var api =  {};
		api.BASE_URL = constants.BASE_URL+"/"+ resource +"/";
                
        api.pesquisar =  function(pagina, tamanho, filtro, loading){
    		return $http.get(this.BASE_URL+"page/"+pagina+"/"+tamanho,{params: filtro, loading: loading});
    	};
    	
    	api.inativar = function(id) {
    		return $http.put(this.BASE_URL+"inativar/"+id);
    	};
    	
    	api.reativar = function(id) {
    		return $http.put(this.BASE_URL+"reativar/"+id);
    	};
    	
    	api.salvar = function(data) {
    		return $http.post(this.BASE_URL,data);
    	};

    	api.alterar = function(id, resource) {
    		return $http.put(this.BASE_URL+id,resource);
    	};

    	api.consultar = function(id) {
    		return $http.get(this.BASE_URL+id);
    	};
    	
    	api.listar = function() {
            return $http.get(this.BASE_URL);
    	};

        api.listarComCache = function() {
            return $http.get(this.BASE_URL, {cache: true});
        };

        api.listarPor = function(paramString) {
            return $http.get(this.BASE_URL+paramString);
        };

        api.listarPorComCache = function(paramString) {
            return $http.get(this.BASE_URL+paramString, {cache: true});
        };

    	return api;
    }
    
    return {createAPI: createAPI};

}]);
