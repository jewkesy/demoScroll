(function() {
	'use strict';

	var downSpeed, upSpeed;

	function init(){ 
		downSpeed = parseInt(getUrlVars()['downSpeed']) || 50000;
		upSpeed =  parseInt(getUrlVars()['upSpeed']) || 1000;
		$('body').animate({ scrollTop: 0 }, upSpeed, function() {
			loop();
		})
	}

	function loop() {
		$('body').animate({ scrollTop: $(document).height() - $(window).height() }, downSpeed, function() {
			// init();
		    $(this).animate({ scrollTop: 0 }, upSpeed, function() {
		    // 	console.log('inner done')
		    	loop();
		    });
		});
	}

	if (getUrlVars()['demoScroll']) {
		window.addEventListener?
		window.addEventListener('load',init,false):
		window.attachEvent('onload',init);
	}

	function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
})();