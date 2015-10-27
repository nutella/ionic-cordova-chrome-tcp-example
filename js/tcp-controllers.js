(function() {
'use strict';
    
angular.module('tcpTest').controller('tcpController',tcpController);

tcpController.$inject= ['tcpServices'];

function tcpController(tcpServices) {
    var vm= this;
    vm.send= send;

	init();

	function init() {
		vm.result= '';
	}

	function send() {
		tcpServices.sendPacket(vm.addr,vm.port,vm.data).then(function(data) {
			vm.result= data;
		});
	}

}

})();