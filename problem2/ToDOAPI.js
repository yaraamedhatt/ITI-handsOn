var api = "https://jsonplaceholder.typicode.com/todos";
function fetchApi(api){
    var req=new XMLHttpRequest();
    req.open('GET',api);
    req.send();
    req.addEventListener('load',function(){
        if(this.status==200 && this.readyState==4){
            console.log('request success');
            dataCenter(JSON.parse(this.responseText));

        }else{
            console.warn("status Error:",this.status);
        }
    });
}
fetchApi(api);
function dataCenter(data){
    var tasks=data;
    tasks.forEach(function(task){
        var row = document.createElement('tr');
        Object.values(task).forEach(function(val){
            var dataHolder=document.createElement('td');
            dataHolder.append(val);
            row.append(dataHolder);
        })
        document.getElementById('table-body').append(row);
    });

}