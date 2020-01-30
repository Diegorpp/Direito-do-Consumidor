chrome.tabs.onUpdated.addListener( function obten_url(){
    if (document.readyState == "complete"){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
            var url = tabs[0].url;
            console.log(url);
            if (url.includes("kabum.com.br")){
                //console.log(true);
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
            }
            else if (url.includes("submarino.com.br")){
                chrome.browserAction.setIcon({path:'/imgs/icon_blue.png'});
            }
            else if (url.includes("americanas.com")){
                chrome.browserAction.setIcon({path:'/imgs/icon_red.png'});
            }
            else if(url.includes("amazon.com")){
                chrome.browserAction.setIcon({path:'/imgs/icon_yellow.png'});
            }
            else{
                chrome.browserAction.setIcon({path:'/imgs/icon_gray.png'});
            }

        });
    }
});