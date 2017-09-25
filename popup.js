var menuItem = {
    "id": "semo moodle",
    "title": "semo moodle",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "semo moodle" && clickData.selectionText){    
        var semoUrl = "https://learning.semo.edu" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": semoUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});
