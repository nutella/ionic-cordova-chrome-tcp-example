(function() {
'use strict';

angular.module('tcpTest').factory('tcpServices', tcpServices);

tcpServices.$inject= ['$q'];

function tcpServices($q) {

	function arrayBuffer2str(buf) {
		return String.fromCharCode.apply(null, new Uint8Array(buf));
	}

	function str2arrayBuffer(str) {
		var buf= new ArrayBuffer(str.length);
		var bufView= new Uint8Array(buf);
		for (var i= 0 ; i < str.length ; i++) {
			bufView[i]= str.charCodeAt(i);
  		}
		return buf;
	}

	function sendPacket(ipAddr,ipPort,data) {
		var delay= 5000;	/// 5 seconds timeout
        var deferred= $q.defer();
		chrome.sockets.tcp.create({}, function(createInfo) {
			var _socketTcpId= createInfo.socketId;
			chrome.sockets.tcp.connect(_socketTcpId, ipAddr, ipPort, function(result) {
				if (result === 0) {
					var data2send= str2arrayBuffer(data);
					/// connection ok, send the packet
					chrome.sockets.tcp.send(_socketTcpId, data2send);
				}
			});
			chrome.sockets.tcp.onReceive.addListener(function(info) {
				/// recived, then close connection
				chrome.sockets.tcp.close(_socketTcpId);
				var data= arrayBuffer2str(info.data);
				deferred.resolve(data);
			});
			/// set the timeout
			setTimeout(function() {
				chrome.sockets.tcp.close(_socketTcpId);
                deferred.reject();
			}, delay);
		});
        return deferred.promise;
	}

	return {
		sendPacket: sendPacket
    };
};

})();



