var vflogo = document.getElementById("vflogo");
var pwlogo = document.getElementById("pwlogo");
var vflb = document.getElementById("vflb");
var pwlb = document.getElementById("pwlb");
var tel = document.getElementById("tel");
var password = document.getElementById("password");
var stage = document.getElementById("stage");
var phonesign = document.getElementById("phonesign");
var accountsign = document.getElementById("accountsign");
var vcodebox = document.getElementById("vcodebox");
var acbt = document.getElementById("acbt");

vflb.onclick = function(){
    phonesign.style.display = "block";
    accountsign.style.display = "none"; 
    vcodebox.style.display = "none"; 
}
pwlb.onclick = function(){
    phonesign.style.display = "none";
    accountsign.style.display = "block";
    vcodebox.style.display = "none"; 
    alert("点击“密码登录框”的登录按钮会出现验证码");
}
acbt.onclick = function(){
    accountsign.style.display = "none";
    phonesign.style.display = "none"; 
    vcodebox.style.display = "block";
    
}
var vcode = document.getElementsByClassName('vcode')[0];
var inp = document.getElementById('inp');
var vcbt = document.getElementsByClassName('vcbt')[0];
var vclabel = document.getElementById('vclabel');
var getvcode = function(){
    var code = Math.random().toString(36).substr(3,5);
    return code;
}
vcbt.onclick = function(){
    // 去掉输入框前后可能出现的空格
    if(vcode.innerHTML == (inp.value).trim()){
        vclabel.innerHTML = "验证通过";
    }
    else if(inp.value == ""){
        vclabel.innerHTML = "请输入验证码";
    }
    else{
        vclabel.innerHTML = "验证失败";
    }
}
vcode.onclick = function(){
    var a = getvcode()
    vcode.innerHTML = a;
}
vcode.click();
