//container = document.getElementsByClassName("subwindow-container-fix screens");
//console.log(document.body.children[0].children.length);
//document.addEventListener("DOMContentLoaded", onUpdate);
document.addEventListener('DOMNodeInserted', onBuild);
//document.body.addEventListener("change",onUpdate);
function onBuild(e){
    container = document.getElementsByClassName("subwindow-container-fix screens");
    if (container.length == 1){
        container = container[0];
        container.addEventListener("DOMNodeInserted",onUpdate);
        document.removeEventListener('DOMNodeInserted',onBuild);
    }
}
var cashdrawerclosed = true;
var openDrawerUrl = "http://127.0.0.1:4242";
function onUpdate(e){
    pay = document.getElementsByClassName("payment-screen screen");
    if (pay.length == 1){
        if (cashdrawerclosed){
            paymentline = document.getElementsByClassName("paymentline selected");
            if (paymentline.length>0){
                paymentType = paymentline[0].getElementsByClassName("payment-name")[0]
                if (paymentType.textContent == "Cash"){
                    cashdrawerclosed = false;
                    opendrawer();
                    return
                }
            }
            paymentline = document.getElementsByClassName("paymentline");
            for (let i = 0; i < paymentline.length; i++){
                paymentType = paymentline[i].getElementsByClassName("payment-name")[0]
                if (paymentType.textContent == "Cash"){
                    cashdrawerclosed = false;
                    opendrawer();
                    return
                }
            }
            paymentType = document.getElementsByClassName("payment-name")[0];
        } 
    }
    prod = document.getElementsByClassName("product-screen screen");
    if (prod.length == 1){
        cashdrawerclosed  = true;
    }
    //pos = 
}
function opendrawer(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", openDrawerUrl, false );
    xmlHttp.send( null );
    console.log("open drawer");
}
/*for (let i = 0; i<20; i++){
    console.log("jjke");
    await sleep(1000);
    container = document.getElementsByClassName("subwindow-container-fix screens");
    console.log(container.length);
    if (container.length==1){
        container = container[0];
        alert(container);
        break;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/*
alert(container);
container.addEventListener("change",onUpdate);

function onUpdate(e){
    alert("dsdfsdf");
}
*/
//<div class="payment-name">Cash</div>
//<div class="subwindow-container-fix screens">
//<div class="payment-screen screen">…</div>
//<div class="product-screen screen">