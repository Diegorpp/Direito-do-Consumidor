document.addEventListener('DOMcontentLoaded',function (){

})

function verifica_dominio(){
    if (document.location.href == "https://kabum.com.br"){
        console.log("Dominio Kabum verificado.")
    }
}

function gera_notificacao(){
    alert("Script rodou corretamente")
}