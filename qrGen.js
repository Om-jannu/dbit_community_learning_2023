// declaring variables
let user_input = document.getElementById("user_input");
let btn = document.getElementById("btn");
let qrImg = document.getElementById("qrImg");
let wrapper = document.querySelector(".wrapper");
let qr_code = document.querySelector(".qr_code");
let user_input1 = document.getElementById("user_input1");
let user_input2 = document.getElementById("user_input2");
// event listners
btn.addEventListener("click", ()=>{
    let entered_text = user_input.value;
    if(!entered_text) return;
    if(Number(user_input1.value) >250 || Number(user_input2.value) > 250){
        alert("image cannot exceed 250px");
        return;
    }
    if(!user_input1.value){
        var entered_px1 = 200;
    }
    else{
        var entered_px1 = user_input1.value;
    }
    if(!user_input2.value){
        var entered_px2 = 200;
    }else{
        var entered_px2 = user_input2.value;
    }
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${entered_px1}x${entered_px2}&data=${entered_text}`;
    btn.innerHTML= "Generating QR Code"; 
});
qrImg.addEventListener("load",()=>{
    wrapper.style.height = "700px";
    qr_code.style.opacity = 1;
    qr_code.style.pointerEvents = "auto";
    btn.innerHTML= "Generate QR Code";
});
user_input.addEventListener("keyup",()=>{
    qr_code.style.opacity = 0;
    wrapper.style.height = "400px";
    qr_code.style.pointerEvents = "auto";
});
user_input1.addEventListener("keyup",()=>{
    qr_code.style.opacity = 0;
    wrapper.style.height = "400px";
    qr_code.style.pointerEvents = "auto";
});
user_input2.addEventListener("keyup",()=>{
    qr_code.style.opacity = 0;
    wrapper.style.height = "400px";
    qr_code.style.pointerEvents = "auto";
});




