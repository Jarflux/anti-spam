chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    chrome.tabs.executeScript(null, {file: "disable-notify-watchers.js"});
});
