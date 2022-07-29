console.log('This is the background page.');
console.log('Put the background scripts here.');



function setTimer(alarmHours, alarmMinutes) {
    var alarmTime = (alarmHours * 60 + alarmMinutes) * 60 * 1000;
    var d = new Date();
    var now = d.getHours() * HOUR_MS +
        d.getMinutes() * 60 * 1000 +
        d.getSeconds() * 1000;
    var delta = (alarmTime - now);
    console.log(delta)

};


chrome.tabs.getCurrent(function (tab) {
    console.log(tab.url + " CURRENT")
})

chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function (tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url + "  + ACTIVE");
});





// chrome.history.search({
//     'text': '',               // Return every history item....
//     // 'startTime': oneWeekAgo,  // that was accessed less than one week ago.
//     'maxResults': 10         // Optionally state a limit
// },
//     function (historyItems) {
//         // For each history item, get details on all visits.

//         for (var i = 0; i < historyItems.length; ++i) {
//             var _time = historyItems[i].lastVisitTime;
//             var url = historyItems[i].url;
//             console.log(_time + " " + url)
//             // do whatever you want with this visited url
//         }
//     })


