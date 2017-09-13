angular.module('starter.config', [])
.constant("constants", {
	BASE_URL: (function() {
		var AMBIENTE = {
	    	'localhost:8100': 'localhost:8080'
		};
		
		return location.protocol+"//"+AMBIENTE[location.host]+"/estacionar/api";
	})(),

	TOKEN_AUTH: 'TOKEN_AUTH',


	status: [
	   {id: 'A', nome: 'Ativos'},
	   {id: 'I', nome: 'Inativos'}
	],

	A: 'A',
	I: 'I',
	ATIVO: 'Ativo',
	INATIVO: 'Inativo',
	
	N: 'N',
	S: 'S',

	MENSAGEM_SUCESSO_CADASTRO: "Registro cadastrado com sucesso!",
	MENSAGEM_SUCESSO_EDICAO: "Registro editado com sucesso!",
	MENSAGEM_SUCESSO_EXCLUSAO: "Registro exclu\u00eddo com sucesso!",
	MENSAGEM_FALHA_SERVIDOR: "Falha no servidor",

});

