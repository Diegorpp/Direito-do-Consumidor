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
        console.log(str);
        var res = JSON.parse(str);
        console.log(res.finalScore);
        console.log(res.consumerScore);
        console.log(res.answeredPercentual);
        console.log(res.dealAgainPercentual);
        console.log(res.status);
        document.getElementById('finalScore').innerHTML = res.finalScore;
        document.getElementById('status').innerHTML = res.status;

     };
     
}
parse("kabum");