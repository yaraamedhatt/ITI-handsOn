function drawPattern(direction,counter){
    var result;
    var src;
    var star="*";
    var countnum=parseInt(counter);
    if(direction=="increase" && countnum>0){
        for(let i=1;i<=countnum;i++){
            src=[];
            for(let j=0; j<i;j++){
                src.push(star);
            }
            console.log(src.join(""));
        }

    }
    else if(direction=="decrease" && countnum<0){
        for(let i=-countnum;i>0;i--){
          console.log(repeat(i));
        }

    }
    else{
        console.error("enter valid numbers");
        return "enter valid numbers";
    }
}
drawPattern("decrease",-4);