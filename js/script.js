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
    var res = JSON.parse(str);

    if (res.status == "GREAT") {document.getElementById('js/status').innerHTML = "ÓTIMO"};
    document.getElementById('js/score').innerHTML = res.finalScore+"/10";
    document.getElementById('js/consumer').innerHTML = "Nota do consumidor: "+res.consumerScore+"/10";
    document.getElementById('js/resp').innerHTML = "Reclamações Respondidas: "+res.answeredPercentual+"%";
    document.getElementById('js/dealagain').innerHTML = "Voltaria a fazer compra "+res.dealAgainPercentual+"%";

    console.log(str);
    console.log(res.finalScore);
    console.log(res.consumerScore);
    console.log(res.answeredPercentual);
    console.log(res.dealAgainPercentual);
    console.log(res.status);
        //Informações que conseguimos e que vamos utilizar.
//        fill_popup(str);        
     };     
};

parse("kabum");