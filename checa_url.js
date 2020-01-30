chrome.tabs.onUpdated.addListener( function obten_url(){
    if (document.readyState == "complete"){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
            var url = tabs[0].url;
            console.log(url);
            if (url.includes("kabum.com.br")){
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                chrome.browserAction.setPopup({popup:'/imgs/kabum_teste.png'})
            }
            else if (url.includes("magazineluiza.com.br")){
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