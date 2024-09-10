function mydate(){
    
    const date1=new Date(document.querySelector("#date1").value);
    const date2=new Date(document.querySelector("#date2").value);
    // console.log(date1,date2);
    

    // calculate difference
    
     if(isNaN(date1.getTime()) == 0 || isNaN(date2.getTime()) == 0){
        document.querySelector("#output").innerText=`please valid number num`;
     }
     else if(date1>date2){
        const result=date1-date2
        document.querySelector("#output").innerText=`${result}`;
     }
     else if(date2>date1){
        const result=date2-date1
        document.querySelector("#output").innerText=`${result}`;
     }
     else if(date1===date2){
        document.querySelector("#output").innerText=`date is equal`
     }

}
document.querySelector("#result").addEventListener("click",mydate)