var stdholder=document.getElementById("stdlst");
var srchInput=document.getElementById("srchInput");
var searchbtn=document.getElementById("searchbtn");
var srcharr=[];

function addstd(){
    var addbtn=document.getElementById("addstd")
    addbtn.addEventListener('click',function(){
        var stdname=prompt("please enter student name: ");
        if(stdname && /[a-zA-z]$/.test(stdname.trim())){
            srcharr.push(stdname);
            rerender();
        }
    });
}
addstd();
function rerender(){
    stdholder.innerHTML="";
    updatestd(srcharr);
    var delarr=Array.from(document.getElementsByClassName("deleteStd"));
    deletestd(delarr);
}
function updatestd(srcharr){
    srcharr.forEach(std => {
        var holder=document.createElement("div");
        var delbtn=document.createElement("button");
        holder.append(std);
        delbtn.append("X");
        holder.className = 'std';
		delbtn.className = 'deleteStd';
        holder.append(delbtn);
        stdholder.append(holder);
        searchbtn.disabled=false;
    });
}
function deletestd(delarr){
    delarr.forEach(std => {
        std.addEventListener('click',function(){
            var allstds=Array.from(document.getElementsByClassName("std"));
            var deletetarget=std.parentElement;
            var delindex=allstds.indexOf(deletetarget);
            srcharr=srcharr.filter((std,i) => {
                return i !== delindex;
            });
            rerender();
            srchInput.value= '';
        });
    });

}
function search(){
    if (srchInput.value.trim() === '') {
		rerender();
	}
	if (srcharr.includes(srchInput.value.trim())) {
		var allStd = Array.from(document.getElementsByClassName('std'));
		allStd.forEach(function (std) {
			var stdName = std.innerText;
			if (stdName.toLowerCase() !== (srchInput.value + 'X').toLowerCase()) {
				// Handel The Lower And Upper Case in Search
				std.style.display = 'none';
			}
		});
	}
}
searchbtn.addEventListener('click', search);