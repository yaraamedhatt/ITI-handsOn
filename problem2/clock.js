var monthArr=[
    'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
var hours = document.getElementById('hrs');
var mins = document.getElementById('mins');
var secs = document.getElementById('scs');
var dayNight = document.getElementById('d-n');
var dateText = document.getElementById('date');
setInterval(function(){
    var date=new Date();
    mins.innerText=date.getMinutes();
    secs.innerText=date.getSeconds();
    if(date.getHours()>12){
        hours.innerText=date.getHours() - 12;
        dayNight.innerHTML='Pm';
    }
    else{
        hours.innerText=date.getHours();
        dayNight.innerHTML='am';  
    }
    dateText.innerText=date.getUTCDate() + ' '+ monthArr[date.getMonth()] + ' ' + date.getFullYear();
},1000)