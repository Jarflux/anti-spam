window.onload = function() {
	if(window.location.href.indexOf('confluence') !== -1){
		var e = document.getElementById("notifyWatchers");
		if(e){
        		e.checked = false;
      		}
	}
}
