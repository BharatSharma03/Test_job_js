let emplist=[{name:"John doe",dept:"php",empId:5},
    {name:"Paul smith",dept:"MERN",empId:4},
    {name:"Tom smith",dept:"SEO",empId:7}  
];
let array=[];
for(let i=0;i<emplist.length-1;i++){
   for(let j=1;j<emplist.length;j++){
    if(emplist[j].empId < emplist[i].empId){
        
        //need to be swap  

        let temp=emplist[i];
        emplist[i]=emplist[j];
        emplist[j]=temp;
    }
   }
    
    
}
console.log(emplist);


