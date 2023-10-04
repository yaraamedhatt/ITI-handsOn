var w1=document.getElementById("w-hrs");
var w2=document.getElementById("w-mins");
var w3=document.getElementById("w-scs");
var b1=document.getElementById("b-hrs");
var b2=document.getElementById("b-mins");
var b3=document.getElementById("b-scs");

var startw=document.getElementById("start-w");
var startB=document.getElementById("start-b");
var resW=document.getElementById("res-w");
var endW=document.getElementById("end-w");
function valformat(val){
    return val <10 ? "0" +val :val;
}
var intervalflags=[];
function startTimer(hrs,mins,scs,flagindex,starttime){
    var seconds=starttime;
    intervalflags[flagindex]=setInterval(function(){
        seconds++;
        hrs.innerText=valformat(Math.floor(seconds/3600));
        mins.innerText=valformat(Math.floor((seconds%3600)/60));
        scs.innerText=valformat(Math.floor(seconds%60));

    },10);
  
}
startw.addEventListener('click', function () {
    startTimer(w1, w2, w3, 0, 0);
    this.disabled = true;
    this.className = 'deactive';
    startB.disabled = false;
    startB.className = 'active';
    endW.disabled = false;
    endW.className = 'active';
});
startB.addEventListener('click', function () {
	clearInterval(intervalflags[0]);
	var sentTime = +b1.innerText * 3600 + +b2.innerText * 60 + +b3.innerText;
	startTimer(b1, b2, b3, 1, sentTime);
	this.disabled = true;
	this.className = 'deactive';
	resW.disabled = false;
	resW.className = 'active';
});
resW.addEventListener('click', function () {
	clearInterval(intervalflags[1]);
	var sentTime = +w1.innerText * 3600 + +w2.innerText * 60 + +w3.innerText;
	startTimer(w1, w2, w3, 0, sentTime);
	this.disabled = true;
	this.className = 'deactive';
	startB.disabled = false;
	startB.className = 'active';
});
endW.addEventListener('click', function () {
	clearInterval(intervalflags[0]);
	clearInterval(intervalflags[1]);
	endW.disabled = true;
	this.className = 'deactive';
	resW.disabled = true;
	resW.className = 'deactive';
	startw.disabled = false;
	startw.className = 'active';
	startB.disabled = true;
	startB.className = 'deactive';
	alert(
		'Your Work Time : ' + w1.innerText + 'Hrs ' + w2.innerText + 'Mins ' + w3.innerText + 'Secs ' + '\n' + 
		'Your Break Time : ' + b1.innerText + 'Hrs ' + b2.innerText + 'Mins ' + b3.innerText + 'Secs ',
	);
	w1.innerText = w2.innerText = w3.innerText = '00';
	b1.innerText = b2.innerText = b3.innerText = '00';
});
