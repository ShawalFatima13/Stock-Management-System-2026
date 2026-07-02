// Today's Date

const date = document.getElementById("todayDate");

if(date){
    date.innerHTML = new Date().toDateString();
}

// Live Clock

function updateClock(){

    const clock = document.getElementById("currentTime");

    if(clock){
        clock.innerHTML = new Date().toLocaleTimeString();
    }

}

setInterval(updateClock,1000);

updateClock();


// Chart

const chartCanvas = document.getElementById("stockChart");

if(chartCanvas){

new Chart(chartCanvas,{

type:'bar',

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:'Products',

data:[12,19,8,15,22,17],

backgroundColor:[
'#0d6efd',
'#198754',
'#ffc107',
'#dc3545',
'#6f42c1',
'#20c997'
]

}]

},

options:{
responsive:true
}

});

}
// Notification

const bell = document.querySelector(".bi-bell-fill");

if(bell){

bell.addEventListener("click",function(){

alert("No new notifications");

});

}