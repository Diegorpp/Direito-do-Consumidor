document.addEventListener('DOMcontentLoaded',function (){
chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});
})

function verifica_dominio(){
    if (document.location.href == "https://kabum.com.br"){
        console.log("Dominio Kabum verificado.")
    }
}

function gera_notificacao(){
    alert("Script rodou corretamente")
}

