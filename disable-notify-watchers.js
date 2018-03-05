function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function disbaleNotifyWatchers() {
	if(window.location.href.indexOf('confluence') !== -1){
		var e = document.getElementById("notifyWatchers");
		if(e){
			await sleep(1000); //Sleep to solve race conditions
			e.checked = false;
		}
	}
}

disbaleNotifyWatchers();

