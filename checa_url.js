function parse (empresa){
     var req = new XMLHttpRequest();
     req.open("GET","https://iosite.reclameaqui.com.br/raichu-io-site-v1/company/shortname/kabum",true);
     req.send();
     req.onreadystatechange = function(){
        var str = JSON.parse(req.response);
        console.log(str["companyIndex6Months"]);
        str = str["companyIndex6Months"];
        str = str.replace(/=/g, '":"');
        str = str.replace(/{/g, '{"');
        str = str.replace(/}/g, '"}');
        str = str.replace(/,/g, '","');
        str = str.replace(/ /g, '');
        chrome.browserAction.setPopup({popup:'popup_principal.html'});

        //Informações que conseguimos e que vamos utilizar.
        // console.log(str);
        // var res = JSON.parse(str);
        // console.log(res.finalScore);
        // console.log(res.consumerScore);
        // console.log(res.answeredPercentual);
        // console.log(res.dealAgainPercentual);
        // console.log(res.status);
        // document.getElementbyId("fialScore").innerHTML = res.finalScore;

     };
     
}

    
//chrome.tabs.onUpdated.addListener( function obten_url(){
chrome.tabs.onUpdated.addListener( function obten_url(){
    if (document.readyState == "complete"){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
            var url = tabs[0].url;
            console.log(url);
            if (url.includes("kabum.com.br")){
                parse("kabum");

                //Alteração do icone e do popup da aplicaçao de acordo com o site.
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
 //               chrome.browserAction.setPopup({popup:''});
            }
            else if (url.includes("magazineluiza.com.br")){
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                chrome.browserAction.setPopup({popup:'index.html'});
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
                parse("kabum");

                //Alteração do icone e do popup da aplicaçao de acordo com o site.
                chrome.browserAction.setIcon({path:'/imgs/icon_green.png'});
                chrome.browserAction.setPopup({popup:''});
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


//'{averageAnswerTime=189325.40183137116, finalScore=8.2, totalNotAnswered=228, totalComplains=8637, consumerScore=7.01, created=2020-02-02T14:03:01, start=2019-08-01T14:03:00, solvedPercentual=88.0, type=SIX_MONTHS, totalAnswered=8409, totalComplains30=1751, averageAnswerTime3M=185332.86390339426, hasStamp=false, dealAgainPercentual=76.4, totalEvaluated=3367, answeredPercentual=97.4, company=7254, end=2020-01-31T14:03:00, id=5ea47145-5021-4be8-8ec6-5586aae90750, status=GREAT}'