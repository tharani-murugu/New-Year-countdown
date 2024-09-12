const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const secounds=document.querySelector("#secounds")

function updateTime(){
const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
const currenrDate=new Date();
const deff=newYear-currenrDate;
const d=Math.floor(deff/1000/60/60/24);
const h=Math.floor(deff/1000/60/60%24);
const m=Math.floor((deff/1000/60)%60);
const s=Math.floor((deff/1000)%60);
//console.log(d+" "+h+" "+m+" "+s)

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
secounds.innerHTML=s<10?"0"+s:s;
}
setInterval(updateTime,1000)