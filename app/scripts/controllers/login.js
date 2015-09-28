'use strict';

angular.module('pcApp')
	.controller('LoginController', ['adalAuthenticationService', '$scope' , function(adalAuthenticationService, $scope) {

	var vm = this;

	vm.logout = function() {
		adalAuthenticationService.logOut();
	};

	vm.login = function() {
		//console.log(vm.username, vm.password);
		adalAuthenticationService.login();
	};

	vm.loginInProgress = function() {
		return adalAuthenticationService.loginInProgress();
	};

	vm.getUser = function() {
		adalAuthenticationService.getUser().then(function(response) {
			window.alert(JSON.stringify(response));
		});
	};

    $scope.$on("adal:loginSuccess", function () {
        $scope.loginMessage = "Login Successful";
    });

}]);