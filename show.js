       //返回网页顶部
        var returntop=document.getElementById("returntop");  
        returntop.onclick=function(){
            let scrollTop=document.documentElement.scrollTop;
            let returntoptimer = setInterval(function(){
                scrollTop -= 50;
                if(scrollTop<=0 || window.onclick){
                    clearInterval(returntoptimer);
                }
                document.documentElement.scrollTop=document.body.scrollTop=scrollTop;
            },50)                   
        }
        returntop.onmouseover=function(){
            returntop.innerHTML="返回顶部";
        }
        returntop.onmouseleave=function(){
            returntop.innerHTML="↑";
        }
       // 修改头像
        var pclb1 = document.getElementById("pclb1");
        var pclb2 = document.getElementById("pclb2");
        var photo = document.getElementById("photo");
        var photoo = document.getElementById("photoo");
        var firstletter1 = document.getElementById("firstletter1");       
        var firstletter2 = document.getElementById("firstletter2");       
        pclb1.onclick = function(){
            if(photo.src==""){
                firstletter1.innerHTML = ""; 
                photo.src = "./code2/0ijb9wuc95zf4g4s8ctf142nfdnxgj8.png";
            }
                
        }
        pclb2.onclick = function(){
            if(photoo.src==""){
                firstletter2.innerHTML = ""; 
                photoo.src = "./code2/0ijb9wuc95zf4g4s8ctf142nfdnxgj8.png";
            }     
        }
        // 搜索框
        var search = document.getElementById("search");
        search.onkeydown = function(event){
            let searchtext;
            if(event.keyCode===13){
                searchtext = search.value;
                alert("呆呆不吃白菜"); 
                search.value = "";
            }             
        }
        
        Event.onkeydown
        //展台切换
        var all = document.getElementById("all");
        var zhoubian = document.getElementById("zhoubian");
        var shouban = document.getElementById("shouban");
        var house = document.getElementById("house");
        var clothes = document.getElementById("clothes");
        var furniture = document.getElementById("furniture");
        
        var stage = document.getElementById("stage");
        var alllist = document.getElementById("alllist");
        var zhoubianlist = document.getElementById("zhoubianlist");
        var shoubanlist = document.getElementById("shoubanlist");
        var houselist = document.getElementById("houselist");
        var clotheslist = document.getElementById("clotheslist");
        var furniturelist = document.getElementById("furniturelist");
        var list3li = document.getElementsByClassName("list3li");
        function change(m){
            for(let i= 0;i<list3li.length;i++){ 
                list3li[i].style.color = 'black';
                list3li[i].style.borderBottom = 'none';
            }
            m.style.color = 'rgba(240, 38, 24, 0.719)';
            m.style.borderBottom = '2px solid black';
        }
        change(all);
        all.onclick = function(){
            stage.style.marginLeft = '0px';
            change(all);
        }
        zhoubian.onclick = function(){
            stage.style.marginLeft = '-1256px';
            change(zhoubian);
        }
        shouban.onclick = function(){
            stage.style.marginLeft = '-2512px';
            change(shouban);
        }
        house.onclick = function(){
            stage.style.marginLeft = '-3768px';
            change(house);
        }
        clothes.onclick = function(){
            stage.style.marginLeft = '-5024px';
            change(clothes);
        }
        furniture.onclick = function(){
            stage.style.marginLeft = '-6280px';
            change(furniture);
        }
        /*more按钮*/
       var showstand1bt = document.getElementById("showstand1bt");
       var showstand2bt = document.getElementById("showstand2bt");
       var showstand3bt = document.getElementById("showstand3bt");
       var signinbt = document.getElementById("signinbt");  
       //字符串转为url地址
        function jump(url){
           location.href = encodeURI(url);
           alert("请点击“创作”或“sign in”或下方展台选项!");
       }
       showstand1bt.onclick = function(){
            jump("#");
       }
        showstand2bt.onclick = function(){
            jump("#");
       }
       showstand3bt.onclick = function(){
            jump("#");
       }
       signinbt.onclick = function(){
            location.href = encodeURI("signin.html");
       }
    // tab选项
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tab4 = document.getElementById("tab4");
    var tab5 = document.getElementById("tab5");
    var tab6 = document.getElementById("tab6"); 
    var tab7 = document.getElementById("tab7");
    var tab8 = document.getElementById("tab8");
    var tab9 = document.getElementById("tab9");
    var tab10 = document.getElementById("tab10");
    var tab11 = document.getElementById("tab11");
    var tab12 = document.getElementById("tab12"); 
    var showstand3bt = document.getElementById("showstand3bt")
    tab1.onclick = function(){
        jump("#");
    }
    tab2.onclick = function(){
        jump("#");
    }
    tab3.onclick = function(){
        location.href = encodeURI("CenterofCreation.html"); 
    }
    tab9.onclick = function(){
        location.href = encodeURI("CenterofCreation.html"); 
    }
    tab4.onclick = function(){
        jump("#");
    }
    tab5.onclick = function(){
        jump("#");
    }
    tab6.onclick = function(){
        jump("#");
    }
    showstand3bt.onclick = function(){
        jump("#");
    }
    

