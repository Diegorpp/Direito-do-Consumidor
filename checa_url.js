function parse (empresa){
     // var req = new XMLHttpRequest();
     // req.open("GET","https://iosite.reclameaqui.com.br/raichu-io-site-v1/company/shortname/kabum",true);
     // req.send();
     // req.onreadystatechange = function(){
     //    var str = JSON.parse(req.response);
     //    console.log(str["companyIndex6Months"]);
     //    str = str["companyIndex6Months"];
     //    str = str.replace(/=/g, '":"');
     //    str = str.replace(/{/g, '{"');
     //    str = str.replace(/}/g, '"}');
     //    str = str.replace(/,/g, '","');
     //    str = str.replace(/ /g, '');
        chrome.browserAction.setPopup({popup:'popup_principal.html'});

     };
     
//}

    
//chrome.tabs.onUpdated.addListener( function obten_url(){
chrome.tabs.onUpdated.addListener( function obten_url(){
    if (document.readyState == "complete"){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
            var url = tabs[0].url;
            console.log(url);
            if (url.includes("kabum.com.br")){
                //Alteração do icone e do popup da aplicaçao de acordo com o site.
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                parse("kabum");
 //               chrome.browserAction.setPopup({popup:''});
            }
            else if (url.includes("magazineluiza.com.br")){
                //chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                //chrome.browserAction.setPopup({popup:'index.html'});
                parse("luiza");
            }
            else if (url.includes("submarino.com.br")){
                chrome.browserAction.setIcon({path:'/imgs/icon_blue2.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else if (url.includes("americanas.com")){
                chrome.browserAction.setIcon({path:'/imgs/icon_red.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else if(url.includes("amazon.com")){
                chrome.browserAction.setIcon({path:'/imgs/icon_yellow.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else{
                chrome.browserAction.setIcon({path:'/imgs/icon_gray.png'});
            }

        });

    }
});

chrome.tabs.onActivated.addListener( function obten_url(){
    if (document.readyState == "complete"){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
            var url = tabs[0].url;
            console.log(url);
            if (url.includes("kabum.com.br")){
                //Alteração do icone e do popup da aplicaçao de acordo com o site.
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                parse("kabum");
                chrome.browserAction.setPopup({popup:'popup_principal.html'});
            }
            else if (url.includes("magazineluiza.com.br")){
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else if (url.includes("submarino.com.br")){
                chrome.browserAction.setIcon({path:'/imgs/icon_blue.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else if (url.includes("americanas.com")){
                chrome.browserAction.setIcon({path:'/imgs/icon_red.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else if(url.includes("amazon.com")){
                chrome.browserAction.setIcon({path:'/imgs/icon_yellow.png'});
                chrome.browserAction.setPopup({popup:''});
            }
            else{
                chrome.browserAction.setIcon({path:'/imgs/icon_gray.png'});
            }

        });

    }
});