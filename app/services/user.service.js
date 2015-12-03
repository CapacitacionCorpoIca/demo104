/*
Servicio de usuarios
*/
(function() {
  'use strict';
  angular
    .module('appCorpoIca')
    .factory('userService', userService);

    userService.$inject = [
      '$http'
    ];

    function userService( $http ){
    	var host = 'http://www.corpoica.org.co';
    	var path = '/webservices/wcfservmoodle/ws_servmoodle.asmx/validarUsuario'; 
    	
    	var service = {
    		login: login,
        forgot: forgot
    	};

    	return service;

    	/*function login( user, pass ){
    		return $http.get( host + path, {
    			params: {
    				user: user,
    				pass: pass
    			},
    			responseType:'xml'
    		});
    	}*/
    	function login(email, password){
    		return $http({
	        method: 'POST',
	        url: 'http://apistaging.sponzor.me/auth',
	        headers: {
	        	'Content-Type':'application/x-www-form-urlencoded'
	       	},
	        data: $.param({
	          email: email,
	          password: password
	        })
	      })
    	}

        function forgot(){
            gdfskgdlskgjdfgjfk
        }
    	
    }

})();