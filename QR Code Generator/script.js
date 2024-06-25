const input = document.querySelector(".input");
const btn = document.querySelector(".but");
const qrcode = document.querySelector(".qrcode");
const qr = document.querySelector(".qr");
btn.addEventListener("click", getQr);

function getQr(){
    if(input.value == ""){
        alert("enter some value");
    }
    if(input.value !== ""){
        let val = input.value;
        let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + val;

        qr.style.opacity = `0`;

        setTimeout(() => {
            qr.src = url;
            qr.style.opacity = `1`;
        }, 300);

        qr.src = "";
    }
}