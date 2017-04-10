var searchImdb = function(searchterm) {
    var query = searchterm.selectionText;
    console.log(query);
    chrome.windows.create({url: 'http://www.imdb.com/find?ref_=nv_sr_fn&q=' + query + 'lel&s=all', incognito: true})
}

chrome.contextMenus.create({
    title: 'Search on IMDb',
    contexts:['selection'],
    onclick: searchImdb,
    documentUrlPattern: [
        '*://imdb.com/*,' +
        '*://*.imdb.com/*'
    ]
})