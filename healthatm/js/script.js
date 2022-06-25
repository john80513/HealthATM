$('.navbar-toggler').click(function() {
  
  $('.navbar').toggleClass('navbar--open');
  $(this).toggleClass('open');
    
});




window.onload=toogleBtn;

function toogleBtn(){
    
    var openMenuBtn = document.getElementById('toogleBtn');
    
    
    if(openMenuBtn.style.marginLeft==="15px"){
        
        document.getElementById('amtNavbar').style.marginLeft="120px";        
        document.getElementById('toogleBtn').style.marginLeft="70px";
        document.getElementById('logo').style.marginLeft="120px";
        document.getElementById('navMenu').style.marginLeft="120px";
        document.getElementById('Content').style.marginLeft="120px";


        
    }else{
        
        document.getElementById('amtNavbar').style.marginLeft="0px";        
        document.getElementById('toogleBtn').style.marginLeft="15px";
        document.getElementById('logo').style.marginLeft="0px";
        document.getElementById('navMenu').style.marginLeft="0px";
        document.getElementById('Content').style.marginLeft="0px";


    }
}



var curIndex=0; 
//時間間隔 單位毫秒 
var timeInterval=1000; 

var arr=new Array(); 
arr[0]="showpic1.png"; 
arr[1]="showpic2.png"; 
arr[2]="showpic3.png"; 
arr[3]="showpic4.png"; 
arr[4]="showpic5.png"; 
arr[5]="showpic6.png"; 
arr[6]="showpic7.png"; 
arr[7]="showpic8.png"; 


setInterval(changeImg,timeInterval); 
function changeImg() 
{ 
var obj=document.getElementById("showpic"); 
if (curIndex==arr.length-1) 
{ 
    curIndex=0; 
    obj.style.opacity="1";
} 
else 
{ 
    curIndex+=1; 

} 
obj.src="/healthatm/img/"+arr[curIndex]; 
} 

 











